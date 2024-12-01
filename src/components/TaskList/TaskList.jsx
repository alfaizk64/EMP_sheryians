import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({employeeData}) => {
  console.log(employeeData.tasks);
  
    
  return (
    <>
       <div id="tasklist" className='h-[55%] overflow-x-auto flex  items-center gap-5 justify-start flex-nowrap rounded-xl py-5 w-full mt-10'>
          {
            employeeData.tasks.map((task,index)=>{
                if(task.active){
                   return <AcceptTask key={index}/>
                }
                if(task.NewTask){
                    return <NewTask key={index}/>
                }
                if(task.Completed){
                    return <CompleteTask key={index}/>
                }
                if(task.failed){
                    return <FailedTask key={index}/>
                }
            })
          }
            
       </div> 
    </>
  )
}

export default TaskList
