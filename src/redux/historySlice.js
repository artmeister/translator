import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    add(state, { payload }) {
      state.push(payload)
    },
  },
})

export const { add } = historySlice.actions
export const selectHistory = ({ history }) => history


export default historySlice.reducer