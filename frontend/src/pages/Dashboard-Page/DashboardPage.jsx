import React from 'react';
import Kalender from '../../components/Kalendar';
import ChartBar from '../../components/ChartBar';
import Jam from '../../components/Jam';

export default function DashboardPage() {
  return (
    <>
      <div className='flex h-screen w-full flex-col gap-4 p-4'>
        <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
          <div className='flex h-full w-[340px] flex-col gap-4 '>
            <div className='h-1/2 rounded-[20px] bg-white shadow-xl'></div>
            <div className='h-1/2 rounded-[20px] bg-white p-4 shadow-xl'>
              <p className='text-center font-bold'>AKTIVITAS</p>
              <ChartBar />
            </div>
          </div>
          <div className='flex w-[600px] flex-col gap-4'>
            <div className='flex h-[80px] items-center justify-center rounded-[20px] bg-[#079ABB] text-center text-3xl font-bold text-white shadow-xl'>
              <Jam />
            </div>
            <div className='h-full rounded-[20px] bg-white shadow-xl'></div>
          </div>
          <div className='flex h-full w-[340px] flex-col gap-4 '>
            <div className='h-1/2 rounded-[20px] bg-white shadow-xl'></div>
            <div className='h-1/2 rounded-[20px] bg-white p-2 shadow-xl'>
              <Kalender />
            </div>
          </div>
        </div>
        <div className='flex h-1/3 w-full flex-row justify-center gap-4 '>
          <div className='h-full w-[956px] rounded-[20px] bg-white shadow-xl '></div>
          <div className='h-full w-[340px] rounded-[20px] bg-[#079ABB] shadow-xl'></div>
        </div>
      </div>
    </>
  );
}
