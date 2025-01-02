import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({employeeData}) => {
  return (
    <>
       <div id="tasklist" className='h-[55%] overflow-x-auto flex  items-center gap-5 justify-start flex-nowrap rounded-xl py-5 w-full mt-10'>
          {
            employeeData.tasks.map((task,index)=>{
                if(task.active){
                   return <AcceptTask key={index} task={task} />
                }
                if(task.newTask){
                    return <NewTask key={index} task={task} />
                }
                if(task.completed){
                    return <CompleteTask key={index} task={task} />
                }
                if(task.failed){
                    return <FailedTask key={index} task={task} />
                }
            })
          }
            
       </div> 
    </>
  )
}

export default TaskList
