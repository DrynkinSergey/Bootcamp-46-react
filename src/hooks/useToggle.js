import { useState } from 'react'

export const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false)

	const setOpen = number => setIsOpen(true)
	const setClose = () => setIsOpen(false)
	const toggle = () => setIsOpen(!isOpen)

	return { setClose, setOpen, toggle, isOpen }
}
