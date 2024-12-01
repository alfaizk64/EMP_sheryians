import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({employeeData}) => {
    console.log(employeeData);
    
  return (
    <>
      <div className='p-10 h-screen bg-[#1c1c1c]'>
        <Header employeeData={employeeData}/>
         <TaskListNumber employeeData={employeeData}/>
         <TaskList employeeData={employeeData}/>
      </div>
    </> 
  )
}

export default EmployeeDashboard
