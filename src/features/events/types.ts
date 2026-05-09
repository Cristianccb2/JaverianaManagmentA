export interface EventItem {
  id: number
  title: string
  description: string
  category: 'Pregrado' | 'Posgrado' | 'Educación Continua'
  modality: 'Virtual' | 'Presencial' | 'Híbrido'
  duration: string
  faculty: string
  image: string
}