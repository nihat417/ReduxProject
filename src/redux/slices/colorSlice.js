import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "white",
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.value = "gray";
    },
    disableDarkMode: (state) => {
        state.value = "white";
      },
    enableCustomColor: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { enableDarkMode,disableDarkMode, enableCustomColor } = colorSlice.actions

export default colorSlice.reducer