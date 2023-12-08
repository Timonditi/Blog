import {BrowserRouter, Routes, Route } from "react-router-dom" 
import './App.css'
import "flowbite"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Addpost from "./pages/Addpost"
import Profile from "./pages/Profile"
import Singlepost from "./pages/Singlepost"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Addpost" element={<Addpost />}/>
        <Route path="Profile" element={<Profile />} />
        <Route path="Singlepost" element={<Singlepost />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
