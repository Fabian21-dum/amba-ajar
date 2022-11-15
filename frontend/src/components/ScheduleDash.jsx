import React from 'react';
import PropTypes from 'prop-types';

export default function ScheduleDash({ jadwal }) {
  return (
    <>
      <div className='w-full overflow-x-auto sm:rounded-lg'>
        <table className=' w-full text-left text-sm text-gray-500'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700 '>
            <tr>
              <th scope='col' className='py-2 px-6'>
                TANGGAL
              </th>
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
            {jadwal !== null &&
              jadwal.slice(0, 3).map((res) => {
                return (
                  <>
                    <tr className='border-b bg-white'>
                      <th scope='row' className='whitespace-nowrap py-2 px-6 font-medium text-gray-900'>
                        {res.date}
                      </th>
                      <td className='py-2 px-6'>{res.course}</td>
                      <td className='py-2 px-6'>{res.mentor}</td>
                      <td className='py-2 px-6'>{res.duration} Menit</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

ScheduleDash.propTypes = {
  jadwal: PropTypes.array,
};
