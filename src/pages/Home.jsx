import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Home = () => {
	return (
		<div className='flex flex-col gap-4 italic'>
			<h1 className='font-bold'>Welcome to our homepage!</h1>

			<p>
				We are excited to have you here and hope you enjoy exploring our
				website. Our mission is to provide you with the best experience
				possible, whether you're looking for information about our products and
				services, or simply browsing our content.
			</p>

			<p>
				At our website, you'll find a wealth of resources, including product
				descriptions, pricing information, and customer reviews. We take pride
				in offering high-quality products and services, and we're committed to
				ensuring your complete satisfaction.
			</p>

			<p>
				Please feel free to contact us if you have any questions or comments.
				Our friendly and knowledgeable customer service team is always available
				to assist you and provide you with the information you need.
			</p>

			<p>
				Thank you for visiting our website. We hope you find everything you're
				looking for and more!
			</p>
		</div>
	)
}
