import { createSlice } from '@reduxjs/toolkit'
import { fetchTCity, addCity, removeCity } from './operations'

const citySlice = createSlice({
	name: 'cityList',
	initialState: {
		items: [],
		error: null,
		loading: false,
	},

	extraReducers: builder => {
		builder
			.addCase(fetchTCity.fulfilled, (state, action) => {
				state.items = action.payload
			})
			.addCase(addCity.fulfilled, (state, action) => {
				state.items.push(action.payload)
			})
			.addCase(removeCity.fulfilled, (state, action) => {
				const itemIndex = state.items.findIndex(
					city => city.id === action.payload.id
				)
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
					state.error = null
				}
			)
	},
})

export const cityReducer = citySlice.reducer
