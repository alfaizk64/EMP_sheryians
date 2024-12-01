import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
setLocalStorage()
 const [user ,setUsere] = useState(null)
 const [loggedInUserData,setLoggeedInUserData] = useState(null)

 const  authData  = useContext(AuthContext)
//  console.log(authData );
 
 const userData = authData.userData
 const {admin,employees} = userData

     
        
//  useEffect(() => {
//     if(authData){
//         const loggedInUser = localStorage.getItem("loggedInUser")
//         if(loggedInUser){
//             setUsere(loggedInUser.role)
//         }
//     }
//  }, [authData])
 

  const handleLogin = (formData)=>{
      const {email ,password} = formData   
     if(email == 'admin@example.com' && password == '1234'){
          setUsere("admin")
          localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
     } else if(employees){
         const loggedEmployee = employees.find((e)=>email == e.email && password == e.password)
         if(loggedEmployee){
           setUsere("employee")
            setLoggeedInUserData(loggedEmployee)  // for showing employee details in admin dashboard
           localStorage.setItem('loggedInUser',JSON.stringify({role:"employee"}))
         }

     }
     else{
      alert("invalid user");
     }

  }

  return (
    <>                                                                                                                                  
     {!user ? <Login handleLogin={handleLogin}/> : ''}
      {/* {user == 'employee' && <EmployeeDashboard loggedInUserData={loggedInUserData}/>} */}
      {/* <EmployeeDashboard/> */}
       {/* <AdminDashboard/> */}
      {} 
      {user == 'employee' ? (<EmployeeDashboard employeeData={loggedInUserData}/>) : user == 'admin' ? <AdminDashboard/> : null }
    </>
  )
}

export default App
