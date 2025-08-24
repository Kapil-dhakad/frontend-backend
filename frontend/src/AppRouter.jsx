import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import PostList from './pages/PostList'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/posts' element={<PostList/>}>posts</Route>
      </Routes>
    </div>
  )
}

export default AppRouter
