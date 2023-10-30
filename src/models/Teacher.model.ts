export interface ITeacher {
  id: string
  name: string
  department: string
  rating: {
    total: number
    average: number
  }
  reviews: Review[]
}

export type Review = {
  id: string
  user: {
    id: string
    name: string
    email: string
  }
  comment: string
  rating: number
}

export class Teacher {
  public readonly id: string
  public readonly name: string
  public readonly department: string
  public readonly rating: {
    total: number
    average: number
  }
  public readonly reviews: Review[]

  constructor(data: ITeacher) {
    this.id = data.id
    this.name = data.name
    this.department = data.department
    this.rating = data.rating
    this.reviews = data.reviews
  }
}
