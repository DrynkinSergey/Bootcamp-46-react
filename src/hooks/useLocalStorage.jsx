import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : initialValue
	})

	useEffect(() => {
		const item = JSON.stringify(value)
		localStorage.setItem(key, item)
	}, [value])

	return [value, setValue]
}
