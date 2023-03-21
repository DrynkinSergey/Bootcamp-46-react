import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: '@@counter',
	initialState: { count: 0, step: 1 },
	reducers: {
		increment(state, action) {
			state.count += state.step
		},
		decrement(state, action) {
			state.count -= state.step
		},
		reset(state, action) {
			return { count: 0, step: 1 }
		},
		changeStep(state, action) {
			state.step = action.payload
		},
	},
})

export const { increment, decrement, reset, changeStep } = counterSlice.actions

export const counterReducer = counterSlice.reducer
