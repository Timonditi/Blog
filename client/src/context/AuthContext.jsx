import { createContext } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    // Login
    const login = (email, password) =>{
        console.log("LOGIN");
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then(res=>res.json())
        .then((response)=>{
            console.log();
        })
    }               
    // register
    const register = () =>{
        console.log("register function");
    }

    const contextData ={
        login,
        register
    }
  return (
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
    
  )
}
