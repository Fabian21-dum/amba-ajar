import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LOGO } from '../assets';

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Navbar() {
  const token = Cookies.get('token');
  return (
    <nav className='container absolute right-0 top-0 left-0 flex justify-between px-4 py-8'>
      <div>
        <Link className='text-2xl font-bold' to='/'>
          <img src={LOGO} alt='logo' />
        </Link>
      </div>

      <div className='space-x-5'>
        {!token && (
          <>
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
          </>
        )}
        {token && (
          <>
            <Link
              className='rounded-full border-2 border-slate-900 px-7 py-3 font-semibold
               text-slate-900 hover:bg-slate-900 hover:text-slate-50'
              to='/dashboard'
            >
              dashboard
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
