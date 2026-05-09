import { createSlice} from '@reduxjs/toolkit'
import type {PayloadAction } from '@reduxjs/toolkit'
import type { Lead } from './types'
import {getLeadsFromStorage,saveLeadsToStorage} from '../../utils/localstorage'

interface LeadsState {
  leads: Lead[]
}

const initialState: LeadsState = {
  leads: getLeadsFromStorage(),
}

const leadsSlice = createSlice({
  name: 'leads',

  initialState,

  reducers: {
    addLead(state, action: PayloadAction<Lead>) {
      state.leads.push(action.payload)

      saveLeadsToStorage(state.leads)
    },
  },
})

export const { addLead } = leadsSlice.actions

export default leadsSlice.reducer