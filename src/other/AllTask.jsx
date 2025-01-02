import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
   const authData = useContext(AuthContext)
     const userData = authData.userData;
     const { admin, employees } = userData;
 
     
   
  return (
    <>
      <div  className=' bg-[#1c1c1c] p-5 mt-5  rounded'>
      <div className='bg-red-300 mb-2 py-2 px-4 flex justify-between'>
                        <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
                        <h3 className='w-1/5 text-lg font-medium  '> New Task</h3>
                        <h5 className='w-1/5 text-lg font-medium  '>Active Task</h5>
                        <h5 className='w-1/5 text-lg font-medium  '>Completed</h5>
                        <h5 className='w-1/5 text-lg font-medium  '>Failed</h5>
                    </div>
                    <div id='tasklist' className=' h-[80%]'>
                    {
                       employees.map((employee, index) => {
               
                  return (
                     <div key={index} className='border-2  border-emerald-500 mb-2 py-2 px-4 flex justify-between'>
                        <h2 className=' text-lg font-medium w-1/5 '>{employee.firstName}</h2>
                        <h3 className=' text-lg font-medium w-1/5 text-blue-600'>{employee.taskCounts.newTask}</h3>
                        <h5 className=' text-lg font-medium w-1/5 text-yellow-400'>{employee.taskCounts.active}</h5>
                        <h5 className=' text-lg font-medium w-1/5 text-white'>{employee.taskCounts.completed}</h5>
                        <h5 className=' text-lg font-medium w-1/5 text-red-600'>{employee.taskCounts.failed}</h5>
                    </div>
                  ) 
            })
         }
                    </div>  
         
      </div> 
    </>
  )
}

export default AllTask
