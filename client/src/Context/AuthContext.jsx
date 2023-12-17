import {createContext } from "react";

export const AuthContext = createContext()



export default function AuthProvider({children}) {
    //LOGIN
    const login = (email, password) =>{
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify({ email, password }),
          })
            .then((res)=>res.json())
            .then((response)=>{
              console.log(response);
            });
          console.log("login function");
    }

    //REGISTER
    const register = () =>{
        console.log("register function");
    }

    const contextData = {
        login,
        register
    }
  return (
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}
