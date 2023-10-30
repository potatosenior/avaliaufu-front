import { ITeacher, Teacher } from '../models'
import { api } from './api'

export class TeacherService {
  private static readonly baseApi = api

  static async listTeachers() {
    const response = (await this.baseApi.get<ITeacher[]>('/professor')).data

    return response.map((teacher) => new Teacher(teacher))
  }

  static async getTeacherById(id: string) {
    const response = (await this.baseApi.get<ITeacher>(`/professor/${id}`)).data

    return new Teacher(response)
  }

  static async createRate(
    professorId: string,
    data: { rating: number; comment: string }
  ) {
    await this.baseApi.post<ITeacher>(`/professor/${professorId}/rate`, data)
  }
}
