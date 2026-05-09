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
  modality: string
  faculty: string
}

const initialState: EventsState = {
  items: [],
  loading: false,
  search: '',
  category: 'Todos',
  modality: 'Todas',
  faculty: 'Todas',
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

    setModality(state, action: PayloadAction<string>) {
  state.modality = action.payload
    },

    setFaculty(state, action: PayloadAction<string>) {
    state.faculty = action.payload
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

export const {
  setSearch,
  setCategory,
  setModality,
  setFaculty,
} = eventsSlice.actions

export default eventsSlice.reducer