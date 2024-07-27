import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='font-bold text-sm bg-slate-200 shadow-md'>
        <div className='flex flex-row justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to={'/'}>
        <h1>
            <span className='text-slate-500'>Real</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center '>
          <input type="text" placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-3'>
          <Link to={'/'}>
          <li className='hidden sm:inline text-slate-700'>Home</li></Link>
          <Link to={'/about'}><li className='hidden sm:inline text-slate-700'>About</li></Link>
          
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header
