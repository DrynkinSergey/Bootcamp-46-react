import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Posts = () => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setPosts(json))
	}, [])
	const navigate = useNavigate()

	return (
		<div>
			<h1>Posts</h1>
			<div className='flex gap-4'>
				<div className=' ml-2'>
					<Link
						to='/posts/new'
						className=' text-sm  block border border-black text-center hover:bg-cyan-500  py-2 px-2 mt-4  bg-cyan-300'
					>
						Create new post
					</Link>
				</div>
				<button className=' text-sm   border border-black text-center hover:bg-cyan-500  py-2 px-2 mt-4  bg-cyan-300'>
					Go back
				</button>
			</div>

			<ol className='list-decimal px-8 py-4'>
				{posts.map(post => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>
							<p className='hover:text-sky-400'>{post.title}</p>
						</Link>
					</li>
				))}
			</ol>
		</div>
	)
}
