import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Posts = () => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setPosts(json))
	}, [])
	return (
		<div>
			<h1>Posts</h1>
			<div className='ml-2'>
				<Link
					to='/posts/new'
					className=' text-sm block w-[20%] max-w-[25%] border border-black text-center hover:bg-cyan-500 hover:text-white py-2 px-2 mt-4  bg-cyan-300'
				>
					Create new post
				</Link>
			</div>
			{posts.map(post => (
				<li className='list-decimal ' key={post.id}>
					<Link to={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</div>
	)
}
