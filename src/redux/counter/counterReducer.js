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
		changeSte2(state, action) {
			state.step = action.payload
		},
	},
})

console.log(counterSlice)
export const { increment, decrement, reset, changeStep } = counterSlice.actions

export const counterReducer = counterSlice.reducer

// // 1 ЕТАП.........................
// export const increment = createAction('increment')
// export const decrement = createAction('decrement')
// export const reset = createAction('reset')
// export const changeStep = createAction('changeStep')
// //................................
// export const counterReducer = createReducer(
// 	{ count: 0, step: 1 }, // - initial state
// 	{
// 		[increment]: (state, action) => {
// 			state.count += state.step //- mutable
// 		},
// 		[decrement]: state => {
// 			state.count -= state.step //- mutable
// 		},
// 		[reset]: (state, action) => {
// 			state = { count: 0, step: 1 }
// 		},
// 		[changeStep]: (state, action) => {
// 			state.step = action.payload
// 		},
// 	}
// )
