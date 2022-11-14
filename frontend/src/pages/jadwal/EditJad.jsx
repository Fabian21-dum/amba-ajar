import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function EditJad() {
  const { state } = useContext(GlobalContext);
  const { paramData, dataJadwal, setDataJadwal } = state;

  const token = Cookies.get('token');
  const user = decode(token);

  const data = dataJadwal.filter((res) => {
    return res.scheduleId == paramData;
  });

  const [field, setField] = useState({ course: '', mentor: '', duration: 0, date: '' });
  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    console.log(field);
  };

  return (
    <div className='flex h-screen w-full flex-col gap-4 p-4'>
      <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className='relative top-[0px] h-fit w-[1099px] rounded-[10px] border border-solid border-[rgba(232,231,231,1)] bg-white'>
          <span className='relative left-[45px] top-[20px] text-4xl font-bold'>EDIT DATA JADWAL</span>
          <Link to='/dashboard/DashJad'>
            <button className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br'>
              Kembali
            </button>
          </Link>
          {data !== null &&
            data.map((res) => {
              return (
                <>
                  <div className='mt-14 flex'>
                    <div className='ml-12 mr-3 w-full'>
                      <span className='mt-10 text-xl font-bold'>Tanggal</span>
                      <input
                        type='date'
                        name='tanggal'
                        id='tanggal'
                        value={res.date}
                        className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
                      />
                    </div>
                  </div>
                  <div className='ml-12 mr-3'>
                    <span className='mt-10 text-xl font-bold'>Pelajaran</span>
                    <input
                      type='text'
                      name='pelajaran'
                      id='pelajaran'
                      value={res.course}
                      className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
                    />
                  </div>
                  <div className='ml-12 mr-3'>
                    <span className='mt-10 text-xl font-bold'>Mentor</span>
                    <input
                      type='text'
                      name='pelajaran'
                      id='pelajaran'
                      value={res.mentor}
                      className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
                    />
                  </div>
                  <div className='ml-12 mr-3'>
                    <span className='mt-10 text-xl font-bold'>Jam Durasi</span>
                    <input
                      type='text'
                      name='pelajaran'
                      id='pelajaran'
                      value={res.duration}
                      className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
                    />
                  </div>
                  <button className='relative mt-10 mb-5 h-[45px] w-[143.48px]  rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br sm:left-[745px] lg:left-[902px]'>
                    EDIT
                  </button>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
