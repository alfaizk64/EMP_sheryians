import React from 'react'

const CompleteTask = () => {
  return (
    <>
        <div className='h-full w-[300px] flex-shrink-0 p-5 bg-gray-400 rounded-xl'>
                      <div className='flex justify-between items-center'>
                            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> High</h3>
                            <h4 className='text-sm'> 20 feb 2024</h4>
                      </div>
                        <h2 className='mt-5 text-2xl font-semibold '>
                            make a You tube video
                        </h2>
                        <p className='text-sm mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius metus at nisi faucibus, vitae bibendum lorem faucibus. Sed bibendum, metus et fermentum consectetur, 
                        </p>
                        <div className='flex justify-between items-center mt-5'>
                            <button className='bg-red-600 text-sm font-medium text-white px-5 py-2 rounded-md'> Mark as Done </button>
                        </div>
            </div>
    </>
  )
}

export default CompleteTask
