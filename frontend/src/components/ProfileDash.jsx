import React from 'react';
import { TODOLIST, JADWAL, SELESAI } from '../assets/Index';

function Icon() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <img src={JADWAL} alt='' className='mr-2 h-8' />
        <p className='font-bold'>10</p>
      </div>
      <div className='flex items-center justify-center'>
        <img src={TODOLIST} alt='' className='mr-2 h-8' />
        <p className='font-bold'>10</p>
      </div>
      <div className='flex items-center justify-center'>
        <img src={SELESAI} alt='' className='mr-2 h-8' />
        <p className='font-bold'>10</p>
      </div>
    </>
  );
}

export default function ProfileDash() {
  return (
    <>
      <div className='h-full w-full'>
        <div className='flex justify-between'>
          <h3 className='text-2xl font-bold'>PROFILE</h3>
          <button
            type='button'
            className='mr-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-2.5 py-2 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
          >
            Edit
          </button>
        </div>
        <div className='mb-2 flex flex-col items-center'>
          <div className='h-20 w-20 rounded-full bg-black'>
            <img src='' alt='' />
          </div>
          <div className='text-2xl font-semibold'>INTAN FITRIANI</div>
        </div>
        <div className='flex justify-around'>
          <Icon />
        </div>
      </div>
    </>
  );
}
