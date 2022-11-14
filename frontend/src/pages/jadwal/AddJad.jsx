import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import decode from 'jwt-decode';

export default function AddJad() {
  const [field, setField] = useState({ course: '', mentor: '', duration: 0, date: '' });
  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    console.log(field);
  };

  const submitJadwal = async (event) => {
    event.preventDefault();
    const token = Cookies.get('token');
    console.log(token);
    const user = decode(token);
    try {
      let { course, mentor, duration, date } = field;
      console.log(course, mentor, duration, date);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/schedule/${user.scheduleId}`,
        { course, mentor, duration, date },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex h-screen w-full flex-col gap-4 p-4'>
      <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className='relative top-[0px] h-fit w-[1099px] rounded-[10px] border border-solid border-[rgba(232,231,231,1)] bg-white'>
          <span className='relative left-[45px] top-[20px] text-4xl font-bold'>TAMBAH JADWAL</span>
          <Link to='/dashboard/DashJad'>
            <button className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br'>
              Kembali
            </button>
          </Link>
          <form onSubmit={submitJadwal}>
            <div className='mt-14 flex'>
              <div className='ml-12 mr-3 w-full'>
                <span className='mt-10 text-xl font-bold'>Tanggal</span>
                <input
                  type='date'
                  name='date'
                  id='date'
                  required
                  onChange={onChangeHandler}
                  className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
                />
              </div>
            </div>
            <div className='ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>Pelajaran</span>
              <input
                type='text'
                name='course'
                id='course'
                required
                onChange={onChangeHandler}
                className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <div className='ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>Mentor</span>
              <input
                type='text'
                name='mentor'
                id='mentor'
                required
                onChange={onChangeHandler}
                className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <div className='ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>Jam Durasi</span>
              <input
                type='number'
                name='duration'
                id='duration'
                required
                onChange={onChangeHandler}
                className='mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <button
              type='submit'
              className='relative mt-10 mb-5 h-[45px] w-[143.48px]  rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br sm:left-[745px] lg:left-[902px]'
            >
              Tambah
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
