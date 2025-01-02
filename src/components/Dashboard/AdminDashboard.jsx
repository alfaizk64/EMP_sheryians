import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = ({changeUser}) => {
  // console.log(changeUser);
  
  return (
    <>
       <div className='p-10 w-full h-screen'>
            <Header changeUser={changeUser}/> 
            {/* Admin dashboard content */}
             <CreateTask/>
             <AllTask/>
       </div>
    </>
  )
}

export default AdminDashboard
