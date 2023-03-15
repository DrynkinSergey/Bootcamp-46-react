import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
export const SinglePost = () => {
	const [post, setPost] = useState([])
	const { id } = useParams()
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(json => setPost(json))
	}, [id])
	return (
		<div>
			<h1 className='font-bold text-4xl text-center'>{post.title}</h1>
			<h3>{post.body}</h3>
			<Link
				className=' block border border-black text-center hover:bg-cyan-700 hover:text-white py-2 mt-4 w-[150px] bg-cyan-300'
				to={`/posts/${id}/edit`}
			>
				Edit post
			</Link>
		</div>
	)
}
