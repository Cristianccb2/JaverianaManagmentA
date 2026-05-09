import type { Lead } from '../features/leads/types'

const STORAGE_KEY = 'javeriana-leads'

export const saveLeadsToStorage = (leads: Lead[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
}

export const getLeadsFromStorage = (): Lead[] => {
  const data = localStorage.getItem(STORAGE_KEY)

  if (!data) return []

  return JSON.parse(data)
}