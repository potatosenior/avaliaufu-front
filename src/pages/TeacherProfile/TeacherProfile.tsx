import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './teacherProfile.css'

import TeacherImg from '../../assets/teacher.png'
import { CommentCardList } from '../../components/CommentCardList'
import { TeacherService } from '../../services/teacher.service'
import { Teacher } from '../../models'

function TeacherProfile() {
  const teacherId = useParams<{ id: string }>().id
  const [teacher, setTeacher] = useState<Teacher>()

  const loadTeacherData = async (teacherId: string) => {
    if (teacherId) {
      TeacherService.getTeacherById(teacherId).then((response) => {
        console.log('teacher found', response)
        setTeacher(response)
      })
    }
  }

  useEffect(() => {
    if (teacherId) loadTeacherData(teacherId)
  }, [teacherId])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!teacherId) return

    event.preventDefault()
    const comment = (event.target as any).comment.value
    const rating = (event.target as any).elements.rating.value

    await TeacherService.createRate(teacherId, {
      rating,
      comment
    })

    loadTeacherData(teacherId)
  }

  return teacher ? (
    <div className="teacherProfile">
      <div className="teacherProfileContainer">
        <img
          src={
            teacher.profilePicture ? `${teacher.profilePicture}` : TeacherImg
          }
          alt="Foto do professor"
        />

        <div>
          <h3>{teacher.name}</h3>

          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={Math.round(teacher.rating.average) <= 1}
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={Math.round(teacher.rating.average) === 2}
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={Math.round(teacher.rating.average) === 3}
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={Math.round(teacher.rating.average) === 4}
              disabled
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={Math.round(teacher.rating.average) === 5}
              disabled
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Adicionar comentário</label>

        <textarea
          className="form-control"
          id="comment"
          name="comment"
          rows={3}
          placeholder="Escreva seu comentário aqui"
        ></textarea>

        <div>
          <div className="rating">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={1}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={2}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={3}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={4}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={5}
              defaultChecked
            />
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>

      <CommentCardList teacher={teacher} />
    </div>
  ) : (
    <h1> Loading...</h1>
  )
}

export default TeacherProfile
