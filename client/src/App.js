import React from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import Singlepost from './Pages/Singlepost'
import Addpost from './Pages/Addpost'
import Login from './Pages/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='Login' element={<Login />}/>
          <Route path='Profile' element={<Profile />} />
          <Route path='Register' element={<Register />} />
          <Route path='post/:id' element={<Singlepost />} />
          <Route path='Addpost' element={<Addpost />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
