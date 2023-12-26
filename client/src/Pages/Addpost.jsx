import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { PostContext } from '../Context/PostContext'

export default function Addpost() {
  const {current_user} = useContext(AuthContext)
  const {Addpost} = useContext(PostContext)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

      Addpost(title, image, content)
  }

  return (
    <div>
      {
        current_user && current_user?
        <div>
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title</label>
              <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required/>
            </div>
            <div className="mb-5">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image</label>
              <input type="text" value={image} onChange={(e)=> setImage(e.target.value)} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required/>
            </div>
            <div className="mb-5">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Content</label>
              <input type="text" value={content} onChange={(e)=> setContent(e.target.value)} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add Blog</button>
          </form>

        </div>:
        <p className='text-red-900 text-centre' >Not Authorized to view this page</p>
      }
    </div>
  )
}
