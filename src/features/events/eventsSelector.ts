import { createSelector } from 'reselect'

import type { RootState } from '../../app/store'

const selectEvents = (state: RootState) => state.events.items
const selectSearch = (state: RootState) => state.events.search
const selectCategory = (state: RootState) => state.events.category
const selectModality = (state: RootState) => state.events.modality
const selectFaculty = (state: RootState) => state.events.faculty

export const selectFilteredEvents = createSelector(
  [
    selectEvents,
    selectSearch,
    selectCategory,
    selectModality,
    selectFaculty,
  ],

  (
    events,
    search,
    category,
    modality,
    faculty,
  ) => {
    return events.filter(event => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        category === 'Todos' ||
        event.category === category

      const matchesModality =
        modality === 'Todas' ||
        event.modality === modality

      const matchesFaculty =
        faculty === 'Todas' ||
        event.faculty === faculty

      return (
        matchesSearch &&
        matchesCategory &&
        matchesModality &&
        matchesFaculty
      )
    })
  },
)