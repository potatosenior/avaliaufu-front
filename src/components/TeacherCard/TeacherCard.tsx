import { Link } from 'react-router-dom'
import { useRoutePaths } from '../../hooks'
import { Teacher } from '../../models'

import './teacherCard.css'
import TeacherImg from '../../assets/teacher.png'

interface TeacherCardProps {
  data: Teacher
}

function TeacherCard({ data }: TeacherCardProps) {
  const { TEACHER_PATH } = useRoutePaths()

  return (
    <Link
      to={TEACHER_PATH.replace(':id', data.id)}
      className="teacherCardContainer"
    >
      <img src={TeacherImg} alt="Foto do professor" />

      <h4>{data.name}</h4>
      <h5>{data.department}</h5>

      <div className="rating-xs">
        {[...Array(Math.round(data.rating.average))].map((_e, i) => (
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            key={i}
          />
        ))}
      </div>
    </Link>
  )
}

export default TeacherCard
