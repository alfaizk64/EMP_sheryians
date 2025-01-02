import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
 const [user ,setUser] = useState(null)
 const [loggedInUserData,setLoggeedInUserData] = useState(null)

 const  authData  = useContext(AuthContext)
//  console.log(authData );
 
 const userData = authData.userData
 const {admin,employees} = userData

     
useEffect(()=>{
  const loggedInUser= localStorage.getItem('loggedInUser')
  if(loggedInUser){
  const userData = JSON.parse(loggedInUser)

  setUser(userData.role)
  // console.log(userData,"userData: ");
  // console.log(userData.role,"role: ");
  
   setLoggeedInUserData(userData.data)

}
},[])
 

  const handleLogin = (formData)=>{
      const {email ,password} = formData   
     if(email == 'admin@example.com' && password == '1234'){
          setUser("admin")
          localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
     } else if(employees){
         const loggedEmployee = employees.find((e)=>email == e.email && password == e.password)
         if(loggedEmployee){ 
           setUser("employee") 
           console.log("employee");
           
            setLoggeedInUserData(loggedEmployee)  // for showing employee details in admin dashboard
           localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:loggedEmployee}))
         }
     }
     else{
      alert("invalid user");
     }

  }

  return (
    <>                                                                                                                                  
     {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'employee' ? (<EmployeeDashboard changeUser={setUser} employeeData={loggedInUserData}/>) : user == 'admin' ? <AdminDashboard changeUser={setUser}/> : null }
    </>
  )
}

export default App
