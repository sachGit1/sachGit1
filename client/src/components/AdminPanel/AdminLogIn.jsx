import React,{useState} from "react";

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BiArrowBack } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { GrSecure } from 'react-icons/gr'

const AdminLogin = ({handleLogin}) => {
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleLogin(username,password);
        setUsername('');
        setPassword('');
    };

    return(
        <div>
            <div className='py-2 sm:px-8 px-2 shadow flex justify-between items-center'>
            <Link to="/" className='flex items-center'>
            <img src="https://i.postimg.cc/GhtrVGrW/logo1.png" style={{width:'220px', height:'100px', marginTop:'-10px', marginBottom:'-10px'}} className='h-8 object-contain' alt="" />
            </Link>
            <Link to="/" className='flex items-center gap-2'>
            <BiArrowBack />
            <span>Back to home</span>
            </Link>
            </div>


      <div className='flex flex-col gap-10 sm:justify-center items-center sm:py-0 py-8' style={{ height: 'calc(100vh - 50px)' }}>
            <h1 className='text-center w-full text-slate-900 md:text-3xl text-xl font-semibold'>Admin Login</h1>
            
            <form action="" className='flex flex-col gap-8' onSubmit={handleFormSubmit}>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full' style={{padding:'10px'}}><MdEmail /></span>
              <input type="text" placeholder="username" value={username} className='w-full h-full px-2 py-2 border-l focus:outline-none' id='username' onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div className='flex items-center border bg-white w-full'>
              <span className='px-2 h-full' style={{padding:'10px'}}><GrSecure /></span>
              <input type="password" value={password} name="password" placeholder='Enter Your password' className='w-full h-full px-2 py-2 border-l focus:outline-none' id="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>  
            <div className={`bg-slate-800 text-white py-2 shadow rounded-full `}>
              <input type="submit" value='Login' className={`h-full w-full cursor-pointer `} />
            </div>
            </form>
      </div>



            
        </div>
    )
}

export default AdminLogin