import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'

const Posts = () => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setPosts(json))
	}, [])
	const navigate = useNavigate()

	const [searchParams, setSearchParams] = useSearchParams()
	console.log(searchParams.get('searchString'))
	const value = searchParams.get('searchString')
	const filteredData = posts.filter(post =>
		post.title.toLowerCase().includes(value || '')
	)
	// lazy - розділяє код ()
	// useSearchParams - витягує пошукові фільтри
	// useLocation - він потрібен для
	// useMemo - він потрібен для
	// useEffect - він потрібен для
	// useState - він потрібен для
	// useRef - він потрібен для
	// useCallback - він потрібен для
	// useId - він потрібен для
	// useNavigate - для навігації

	const submit = e => {
		e.preventDefault()
		const form = e.target
		setSearchParams(
			form.searchStr.value !== '' ? { searchString: form.searchStr.value } : {}
		)
	}
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
			</div>
			<h1>Це копія того що є в URL: {value}</h1>
			<form onSubmit={submit}>
				<input name='searchStr' className='border' type='text' />
				<button>Find</button>
			</form>

			<ol className='list-decimal px-8 py-4 '>
				{filteredData.map(post => (
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

export default Posts
