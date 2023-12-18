import { useEffect, useState } from "react";
import {createContext } from "react";
import { useNavigate } from "react-router-dom";
import  Swal from "sweetalert2"
export const PostContext = createContext()

export default function PostProvider({children}) {
    const nav = useNavigate()
    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch("/post")
            .then((res)=>res.json())
            .then((response)=>{
                setPost(response)
                console.log("post", response);
            })
        }, [])



    const contextData ={
        post,
    }
  return (
    <PostContext.Provider value={contextData}>
        {children}
    </PostContext.Provider>
  )
}
