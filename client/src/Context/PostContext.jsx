import { useEffect, useState } from "react";
import {createContext } from "react";
import { useNavigate } from "react-router-dom";
import  Swal from "sweetalert2"


export const AuthContext = createContext()

export default function AuthProvider({children}) {
  return (
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}
