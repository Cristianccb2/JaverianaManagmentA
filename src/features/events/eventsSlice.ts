import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
 import type { PayloadAction} from '@reduxjs/toolkit'
import { fetchEventsAPI } from './eventsApi'
import type { EventItem } from './types'

interface EventsState {
  items: EventItem[]
  loading: boolean
  search: string
  category: string
}

const initialState: EventsState = {
  items: [],
  loading: false,
  search: '',
  category: 'Todos',
}

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    return await fetchEventsAPI()
  },
)

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },

    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, state => {
        state.loading = true
      })

      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })

      .addCase(fetchEvents.rejected, state => {
        state.loading = false
      })
  },
})

export const { setSearch, setCategory } = eventsSlice.actions

export default eventsSlice.reducer