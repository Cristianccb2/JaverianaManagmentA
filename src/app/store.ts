import { configureStore } from '@reduxjs/toolkit'

import eventsReducer from '../features/events/eventsSlice'
import leadsReducer from '../features/leads/leadsSlice'

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    leads: leadsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch