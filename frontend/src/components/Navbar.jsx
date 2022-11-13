import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Navbar() {
  return (
    <nav className='container absolute right-0 top-0 left-0 flex justify-between px-4 py-8'>
      <div>
        <Link className='text-2xl font-bold' to='/'>
          LOGOS
        </Link>
      </div>
      <div className='space-x-5'>
        <Link className='font-bold' to='/register'>
          Register
        </Link>
        <Link
          className='rounded-full border-2 border-slate-900 px-7 py-3 font-semibold
               text-slate-900 hover:bg-slate-900 hover:text-slate-50'
          to='/login'
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}
