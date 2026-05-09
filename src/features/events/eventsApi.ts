import { api } from '../../services/axios'
import type { EventItem } from './types'

interface JsonPlaceholderPost {
  id: number
  title: string
  body: string
}

const categories = [
  'Pregrado',
  'Posgrado',
  'Educación Continua',
] as const

export const fetchEventsAPI = async (): Promise<EventItem[]> => {
  const response = await api.get<JsonPlaceholderPost[]>('/posts')

  return response.data.slice(0, 12).map((item, index) => ({
    id: item.id,
    title: item.title,
    body: item.body,
    category: categories[index % categories.length],
  }))
}