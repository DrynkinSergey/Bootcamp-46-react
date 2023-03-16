import { useState } from 'react'

export const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false)
	const setOpen = () => setIsOpen(true)
	const setClose = () => setIsOpen(false)
	const toggle = () => setIsOpen(!isOpen)
	return { isOpen, setClose, setOpen, toggle }
}
