import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Profile() {
  const { current_user, logout } = useContext(AuthContext)
  return (
    <div>
      <h2>
        Hello <span>{current_user && current_user.name}</span>
      </h2>
      <i></i>
      <h3>Information</h3>
      <hr />
      <div>
        <img className="w-8 h-8 rounded-full" src={current_user ? current_user.profile_image : ""} lt="user photo"/>
      </div>
      <div>
        <h6>{current_user && current_user.username}</h6>
      </div>
      <div>
        <h6>{current_user && current_user.email}</h6>
      </div>
      <div>
        <h6>{current_user && current_user.created_at}</h6>
      </div>
      <button className='border-2 border-orange-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white' onClick={() => logout()}>Logout</button>
    </div>
  )
}
