import axios from 'axios'

import { setupInterceptors } from './interceptors'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
api.interceptors.request.use((request) => {
  // add "ngrok-skip-browser-warning": "69420" to requests headers
  request.headers['ngrok-skip-browser-warning'] = '69420'

  return request
})
