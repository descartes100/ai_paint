import React from 'react';
import { logo, logo_black } from './assets';
import { Home, CreatePost } from './pages';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4]">
        <Link to='/'>
          <img src={logo_black} alt='logo' className='w-10 object-contain' />
        </Link>
        <div className='space-x-3 justify-end items-center'>
          <Link to='/create-post' className='font-inter font-medium text-white px-4 py-2 rounded-md bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400' >
            Create
          </Link>
          <Link to='/create-post' className='font-inter font-medium text-white px-4 py-2 rounded-md bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200' >
            Login
          </Link>
        </div>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App