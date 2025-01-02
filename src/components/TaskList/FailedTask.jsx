import React from 'react'

const FailedTask = ({task}) => {
  return (
    <>
       <div className='h-full w-[300px] flex-shrink-0 p-5 bg-yellow-400 rounded-xl'>
                      <div className='flex justify-between items-center'>
                            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>  {task.category}</h3>
                            <h4 className='text-sm'> {task.taskDate}</h4>
                      </div>
                        <h2 className='mt-5 text-2xl font-semibold '>
                        {task.taskTitle}
                        </h2>
                        <p className='text-sm mt-2'>
                        {task.taskDescription}, 
                        </p>
                        <div className='flex justify-between items-center mt-5'>
                            <button className='bg-red-600 px-3 py-1 rounded-md text-sm w-full'>Failed </button>
                        </div>
            </div>
    </>
  )
}

export default FailedTask
