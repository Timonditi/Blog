import { useEffect, useState } from "react";
import {createContext } from "react";
import { useNavigate } from "react-router-dom";
import  Swal from "sweetalert2"
export const PostContext = createContext()

export default function PostProvider({children}) {
    const nav = useNavigate()
    const [posts, setPosts] = useState([])
    const [onChange, setonChange] = useState(true)


    const deletePost = (id) =>{
        fetch(`/post/${id}`, {
         method: "DELETE",
                })
        .then((res)=>res.json())
        .then((response)=>{
            if(response.success)
            { 
                nav("/")
                Swal.fire(
                    'success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }
        })
     }

    useEffect(()=>{
        fetch("/post")
        .then((res)=>res.json())
        .then((response)=>{
            setPosts(response)
            console.log("post", response);
        })
    }, [onChange])



    const contextData ={
        posts,
        deletePost
    }
  return (
    <PostContext.Provider value={contextData}>
        {children}
    </PostContext.Provider>
  )
}
