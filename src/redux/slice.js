import { createSlice } from '@reduxjs/toolkit'
import { fetchCity } from './operations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}
const citySlice = createSlice({
	name: 'cityList',
	initialState,
	reducers: {
		addCity: (state, action) => {
			state.items.push(action.payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCity.fulfilled, (state, action) => {
				state.items = action.payload
			})

			.addMatcher(
				action => action.type.endsWith('/pending'),
				(state, action) => {
					state.loading = true
					state.error = null
				}
			)
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				(state, action) => {
					state.loading = false
					state.error = action.payload
				}
			)
			.addMatcher(
				action => action.type.endsWith('/fulfilled'),
				(state, action) => {
					state.loading = false
				}
			)
	},
	// extraReducers: {
	// code...
	// },
})

export const cityReducer = citySlice.reducer
export const { addCity } = citySlice.actions
