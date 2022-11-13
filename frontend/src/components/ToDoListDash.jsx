import React from 'react';

function Checkbox() {
  return (
    <>
      <div className='mb-3 flex h-6 w-full items-center rounded-lg border-2 border-[#1fd0ec] p-5 hover:bg-[#1fd0ec]'>
        <div className='mr-4 flex items-center'>
          <input
            defaultChecked
            id='inline-checked-checkbox'
            type='checkbox'
            defaultValue
            className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-[#1fd0ec]'
          />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default function ToDoListDash() {
  return (
    <>
      <p className='mb-3 text-2xl font-extrabold'>TO DO LIST</p>
      <div className='w-full'>
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </div>
      <button
        type='button'
        className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
      >
        Selengkapnya
      </button>
    </>
  );
}
