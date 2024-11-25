import React from 'react'

const CreateTask = () => {
  return (
    <>
          <div className=" p-5 mt-12 bg-[#1c1c1c] rounded">
                <form className='flex w-full flex-wrap items-start justify-between '> 
                   <div className='w-1/2'>
                        <div className='flex flex-col'>
                            <label htmlFor='title' className='text-sm text-gray-300 mb-0.5'>Task Title</label>
                            <input id='title' className='p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Make a Ui design '/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='date' className='text-sm text-gray-300 mb-0.5'>Date</label>
                            <input id='date' className='p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date"/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='assignto'  className='text-sm text-gray-300 mb-0.5'>Asign To</label>
                            <input id='assignto' className='p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='category'  className='text-sm text-gray-300 mb-0.5'>Category</label>
                            <input id='category' className='p-1 text-sm w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc'/>
                        </div>
                     </div>
                        <div className='w-1/2 flex flex-col items-start'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                            <textarea className='w-full h-44 py-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-gray-300 mb-0.5' name='textarea' id='' cols="30" rows="10"></textarea>
                            <button className='w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-400 '>Create Task</button>
                        </div>
                
                </form>
            </div>
    </>
  )
}

export default CreateTask
