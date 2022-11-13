import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO, HOME, LIST, CALENDAR, SETTING } from '../assets/index.jsx';

export default function SideBar() {
  return (
    <>
      <div className='flex h-screen w-[10%] flex-col items-center gap-4 bg-white py-7 shadow-lg'>
        <div>
          <img src={LOGO} alt='ini stmik' />
        </div>
        <div className='flex w-full flex-col items-center gap-6'>
          <Link to={'/dashboard'}>
            <div className='pointer flex h-14 w-14 justify-center rounded-xl bg-cyan-100 p-2'>
              <img src={HOME} alt='logo Home' />
            </div>
          </Link>
          <Link to={'/dashboard/Todo'}>
            <div className='pointer flex h-14 w-14 justify-center rounded-xl bg-cyan-100 p-2'>
              <img src={LIST} alt='logo LIST' />
            </div>
          </Link>
          <Link to={'/dashboard/DashJad'}>
            <div className='pointer flex h-14 w-14 justify-center rounded-xl bg-cyan-100 p-2'>
              <img src={CALENDAR} alt='logo CALENDAR' />
            </div>
          </Link>
          <Link to={'pengaturan'}>
            <div className='pointer flex h-14 w-14 justify-center rounded-xl bg-cyan-100 p-2'>
              <img src={SETTING} alt='logo SETTING' />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
