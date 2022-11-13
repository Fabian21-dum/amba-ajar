import React from 'react';
import {
  Quote,
  Jam,
  Kalender,
  ChartBar,
  ToDoListDash,
  ScheduleDash,
  ProfileDash,
  Pomodoro,
} from '../../components/index';

export default function DashboardPage() {
  return (
    <>
      <div className='flex h-screen w-full flex-col gap-4 p-4'>
        <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
          <div className='flex h-full w-[340px] flex-col gap-4 '>
            <div className='h-1/2 rounded-[20px] bg-white p-4 shadow-xl'>
              <Pomodoro />
            </div>
            <div className='h-1/2 rounded-[20px] bg-white p-4 shadow-xl'>
              <p className='text-center font-bold'>AKTIVITAS</p>
              <ChartBar />
            </div>
          </div>
          <div className='flex w-[600px] flex-col gap-4'>
            <div className='flex h-[80px] items-center justify-center rounded-[20px] bg-[#079ABB] text-center text-3xl font-bold text-white shadow-xl'>
              <Jam />
            </div>
            <div className='flex h-full flex-col items-center justify-between rounded-[20px] bg-white p-5 shadow-xl'>
              <ToDoListDash />
            </div>
          </div>
          <div className='flex h-full w-[340px] flex-col gap-4 '>
            <div className='h-1/2 rounded-[20px] bg-white p-3 shadow-xl'>
              <ProfileDash />
            </div>
            <div className='h-1/2 rounded-[20px] bg-white p-2 shadow-xl'>
              <Kalender />
            </div>
          </div>
        </div>
        <div className='flex h-1/3 w-full flex-row justify-center gap-4'>
          <div className='h-full w-[956px] rounded-[20px] bg-white p-4 shadow-xl'>
            <div className='flex justify-between px-4'>
              <div>
                <h3 className='text-xl font-bold'>JADWAL</h3>
              </div>
              <div>
                <button
                  type='button'
                  className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-sm dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
                >
                  Selengkapnya
                </button>
              </div>
            </div>
            <ScheduleDash />
          </div>
          <div className='h-full w-[340px] rounded-[20px] bg-[#079ABB] py-5 px-4 text-white shadow-xl'>
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
}
