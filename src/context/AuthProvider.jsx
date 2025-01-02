import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData, setUserData] = useState("")
    // get data from localStorage and store it in context object so everyone can access it easily 
useEffect(() => {
setLocalStorage()
    const {admin ,employees} = getLocalStorage() 
    if (admin && employees) {
        setUserData({admin, employees})
    }
},[])

  return (
    <>
        <AuthContext.Provider value={{userData}}>

            {children}
        </AuthContext.Provider>
    </>
  )
}
export default AuthProvider

