import { createSlice } from '@reduxjs/toolkit'
import { fetchCity, fetchRemoveCity } from './operations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}
const citySlice = createSlice({
	name: 'cityList',
	initialState,
	reducers: {
		addCity: (state, { payload }) => {
			state.items.unshift(payload)
		},
	},

	extraReducers: builder => {
		builder
			.addCase(fetchCity.fulfilled, (state, action) => {
				state.items = action.payload
			})
			.addCase(fetchRemoveCity.fulfilled, (state, action) => {
				const itemIndex = state.items.find(item => item.id === action.payload)
				state.items.splice(itemIndex, 1)
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
