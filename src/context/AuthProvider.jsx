import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState("")
    // get data from localStorage and store it in context object so everyone can access it easily 
useEffect(() => {
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

