import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export default function Login() {

  const {login} = useContext(AuthContext)
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email+ " " +password);

      login(email, password)
  }
  return (
    <div className='flex justify-centre'>
<form onSubmit={handleSubmit} className="max-w-sm mx-auto">
<h1 className='font-bold text-2xl my-6'>Login</h1>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="name@gmail.com.com" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
  </div>
  <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
    Login</button>
    <div className='my-3'> Not Registered?
    <Link className='ml-2' to="/register">
      Signup
    </Link>
    </div>
</form>

    </div>
  )
}
