import { useState } from "react";


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault(); // prevent default form submission
        handleLogin(email, password)
        setEmail('')
        setPassword('')
        
    }

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="border-2 border-blue-600 px-10 py-8 rounded-xl">
        <form 
         onSubmit={(e) => {
            submitHandler(e)
         }}
         className="flex flex-col justify-center items-center gap-3">
           <input 
            value={email}
            onChange={(e) => {
               setEmail(e.target.value)
            }}
            required type="email" placeholder="Enter your e-mail"
            className="bg-transparent outline-none border-2 border-blue-600 px-2 py-1 rounded-lg">          
            </input>
            <input 
             value={password}
             onChange={(e) => {
               setPassword(e.target.value)
             }}
             type="password" placeholder="Enter Password"
             className="bg-transparent outline-none border-2 border-blue-600 px-2 py-1 rounded-lg">          
             </input>
             <button className='bg-blue-600 py-1 px-2 rounded-lg mt-5 hover:bg-blue-500'>
             Log In</button>
          </form>
       </div>
    </div>
  )
}

export default Login