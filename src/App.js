import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Posts } from './pages/Posts'
import { SinglePost } from './pages/SinglePost'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'
import { CreatePost } from './pages/CreatePost'
import { EditPost } from './pages/EditPost'

export const App = () => {
	return (
		<div className='text-3xl font-bold'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='posts/' element={<Posts />} />
					<Route path='posts/:id' element={<SinglePost />} />
					<Route path='posts/:id/edit' element={<EditPost />} />
					<Route path='posts/new' element={<CreatePost />} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}
