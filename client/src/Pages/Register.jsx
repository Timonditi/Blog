import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import  { AuthContext } from '../Context/AuthContext'

export default function Register() {

  const {register} = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [profile_image, setProfile_image] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(username+ " " +email+ " " +profile_image+ " " +password);

    register(username, email, profile_image, password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <h1 className='font-bold text-2xl my-6'>Sign up</h1>
      <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
    <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" required/>
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile image</label>
    <input type='text' value={profile_image} onChange={(e)=> setProfile_image(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" required/>
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" required/>
  </div>
  <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
    Register</button>
    <div className='my-3'> Already have an account?
    <Link className='ml-2' to="/Login">
      Sign in
    </Link>
    </div>
</form>
    </div>
  )
}
