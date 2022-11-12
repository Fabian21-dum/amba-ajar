import React from 'react';

export default function ScheduleDash() {
  return (
    <>
      <div className='relative w-full overflow-x-auto  sm:rounded-lg'>
        <table className=' w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700 '>
            <tr>
              <th scope='col' className='py-2 px-6'>
                PELAJARAN
              </th>
              <th scope='col' className='py-2 px-6'>
                MENTOR
              </th>
              <th scope='col' className='py-2 px-6'>
                DURASI WAKTU
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
              <th scope='row' className='whitespace-nowrap py-2 px-6 font-medium text-gray-900 dark:text-white'>
                Apple MacBook Pro 17
              </th>
              <td className='py-2 px-6'>Sliver</td>
              <td className='py-2 px-6'>Laptop</td>
            </tr>
            <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
              <th scope='row' className='whitespace-nowrap py-2 px-6 font-medium text-gray-900 dark:text-white'>
                Microsoft Surface Pro
              </th>
              <td className='py-2 px-6'>White</td>
              <td className='py-2 px-6'>Laptop PC</td>
            </tr>
            <tr className='border-b bg-white dark:bg-gray-800'>
              <th scope='row' className='whitespace-nowrap py-2 px-6 font-medium text-gray-900 dark:text-white'>
                Magic Mouse 2
              </th>
              <td className='py-2 px-6'>Black</td>
              <td className='py-2 px-6'>Accessories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
