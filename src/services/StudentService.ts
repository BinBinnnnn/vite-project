import axios from 'axios'

// 创建axios实例
const apiClient = axios.create({
  baseURL: 'https://dv-student-backend-2019.appspot.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// 命名导出getStudents方法
export const getStudents = () => {
  return apiClient.get('/students')
}
export type Student = {
  id: number
  name: string
  surname: string
  gpa: number
}
