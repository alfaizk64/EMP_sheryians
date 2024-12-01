import React, {  useState } from 'react'

const Login = ({handleLogin}) => {
     const [formData, setFormData] = useState({email: '', password:''});
      
     function changehandler(e){
        const {name,value}=e.target
        setFormData(prevFromData=>{
            return {
                ...prevFromData,
                 [name]:value
                 };
        })  
     }
    const SubmitHandler = (e) => {
        e.preventDefault();         
        handleLogin(formData) 
        setFormData({email:"", password:""})
    }
 
    
  return (
    <> 
       <div className=' h-screen flex items-center justify-center'>
          <div className='border-2 border-emerald-600 p-20 rounded-xl'>
             <form onSubmit={SubmitHandler} className='flex flex-col gap-3 items-center justify-center'>
                 <input
                  onChange={changehandler}
                  name='email'
                  value={formData.email}
                  required 
                  className='text-white  border-2 border-emerald-600 text-xl outline-none bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Please enter Your email'/>
                 <input 
                  onChange={changehandler}
                  required
                  name='password'
                  value={formData.password}
                  autoComplete='true'
                  className='text-white  border-2 border-emerald-600 text-xl outline-none bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400' type='password' placeholder=' Enter Your Password'/>
                 <button className=' text-white bg-emerald-600 text-xl outline-none border-none py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
             </form>          
          </div>      
       </div>
    </>
  )
}

export default Login
