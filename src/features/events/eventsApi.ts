import { api } from '../../services/axios'
import type { EventItem } from './types'

const programs: Omit<EventItem, 'id'>[] = [
  {
    title: 'Ingeniería de Sistemas',
    description:
      'Programa enfocado en desarrollo de software, inteligencia artificial y arquitectura tecnológica.',
    category: 'Pregrado',
    modality: 'Presencial',
    duration: '10 semestres',
    faculty: 'Ingeniería',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
  },

  {
    title: 'Maestría en Ciencia de Datos',
    description:
      'Especialización avanzada en machine learning, analítica y visualización de datos.',
    category: 'Posgrado',
    modality: 'Híbrido',
    duration: '4 semestres',
    faculty: 'Ingeniería',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },

  {
    title: 'Diplomado en IA Generativa',
    description:
      'Formación intensiva en modelos generativos, prompting y automatización con IA.',
    category: 'Educación Continua',
    modality: 'Virtual',
    duration: '120 horas',
    faculty: 'Educación Continua',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },

  {
    title: 'Administración de Empresas',
    description:
      'Formación estratégica en liderazgo, finanzas y gestión organizacional.',
    category: 'Pregrado',
    modality: 'Presencial',
    duration: '9 semestres',
    faculty: 'Ciencias Económicas',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
  },

  {
    title: 'Especialización en Gerencia Financiera',
    description:
      'Programa orientado a dirección financiera y toma de decisiones corporativas.',
    category: 'Posgrado',
    modality: 'Virtual',
    duration: '2 semestres',
    faculty: 'Finanzas',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
  },

  {
    title: 'Curso UX/UI Design',
    description:
      'Diseño de experiencias digitales centradas en usuario y creación de interfaces modernas.',
    category: 'Educación Continua',
    modality: 'Híbrido',
    duration: '80 horas',
    faculty: 'Diseño',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
]

export const fetchEventsAPI = async (): Promise<EventItem[]> => {
  await api.get('/posts')

  return programs.map((program, index) => ({
    id: index + 1,
    ...program,
  }))
}