import { useEffect, useState } from 'react'
import { Teacher } from '../../models'
import { TeacherCard } from '../TeacherCard'

import './teacherList.css'
import { TeacherService } from '../../services/teacher.service'

function TeacherList() {
  const [teachers, setTeachers] = useState<Teacher[]>([])

  useEffect(() => {
    TeacherService.listTeachers().then((teachers) => setTeachers(teachers))
  }, [])

  return (
    <div className="teacherList">
      <h2>Professores</h2>

      <div className="teachersListContainer">
        {teachers.map((data, index) => (
          <TeacherCard key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default TeacherList
