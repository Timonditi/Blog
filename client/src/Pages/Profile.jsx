import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Profile() {
  const { current_user, logout } = useContext(AuthContext)
  return (
    <div>
      <h2 className='font-serif'>
        Hello <span>{current_user && current_user.name}</span>
      </h2>

      <hr />
      <div className=' pt-2'>
        <img className="w-40 h-40 " src={current_user ? current_user.profile_image : ""} lt="user photo"/>
      </div>
      <div className='font-serif pt-2'>
        <h6>{current_user && current_user.username}</h6>
      </div>
      <div className='font-serif pt-2 pb-4'>
        <h6>{current_user && current_user.email}</h6>
      </div>
      <button className='border-2 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white' onClick={() => logout()}>Logout</button>
    </div>
  )
}
