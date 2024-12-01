import React from 'react'

const TaskListNumber = ({employeeData}) => {

     
  return (
    <>
        <div className='flex mt-10 justify-between gap-5'>
            <div className=' px-9 py-6 rounded-xl w-[45%] bg-red-400'>
                 <h2 className='text-2xl font-semibold'>{employeeData.taskCounts.newTask}</h2>
                 <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className=' px-9 py-6 rounded-xl w-[45%] bg-blue-400'>
                 <h2 className='text-2xl font-semibold'>{employeeData.taskCounts.completed}</h2>
                 <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className=' px-9 py-6 rounded-xl w-[45%] bg-green-400'>
                 <h2 className='text-2xl text-black  font-semibold'>{employeeData.taskCounts.active}</h2>
                 <h3 className='text-xl text-black  font-medium'>Accepeted Task</h3>
            </div>
            <div className=' px-9 py-6 rounded-xl w-[45%] bg-yellow-400'>
                 <h2 className='text-2xl font-semibold'>{employeeData.taskCounts.failed}</h2>
                 <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
            
        </div>
    </>
  )
}

export default TaskListNumber
