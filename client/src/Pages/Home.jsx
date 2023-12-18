import React, { useContext } from 'react'
import { PostContext } from '../Context/PostContext'

export default function Home() {

  const {post} = useContext(PostContext)

  return (
    <div>
      {
        post && post.map((post) =>{
          <div>
            {post.title}
          </div>
        })
      }
    </div>
  )
}
