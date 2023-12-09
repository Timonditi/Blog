import { createContext } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    // Login
    const login = () =>{
        console.log("Login function");
        return "Login function"
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
