import { createSelector } from 'reselect'
import type { RootState } from '../../app/store'

const selectEvents = (state: RootState) => state.events.items
const selectSearch = (state: RootState) => state.events.search
const selectCategory = (state: RootState) => state.events.category

export const selectFilteredEvents = createSelector(
  [selectEvents, selectSearch, selectCategory],
  (events, search, category) => {
    return events.filter(event => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        category === 'Todos' || event.category === category

      return matchesSearch && matchesCategory
    })
  },
)