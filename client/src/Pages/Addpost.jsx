import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Addpost() {
  const {current_user} = useContext(AuthContext)

  return (
    <div>
      {
        current_user && current_user?
        <div>
          Addpost
        </div>:
        <p className='text-red-900 text-centre' >Not Authorized to view this page</p>
      }
    </div>
  )
}
