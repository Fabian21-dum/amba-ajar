import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function EditJad() {
  const { state } = useContext(GlobalContext);
  const { paramData, setParamData, dataJadwal } = state;

  const token = Cookies.get('token');
  const user = decode(token);
  const [field, setField] = useState({ course: '', mentor: '', duration: 0, date: '' });
  useEffect(() => {
    const data = dataJadwal.filter((res) => {
      return res.scheduleId == paramData;
    });
    console.log(data);
    setField(data[0]);
    console.log(field);
  }, []);
  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    console.log(field);
  };

  const SubmitUpdate = async (event) => {
    event.preventDefault();
    try {
      let { course, mentor, duration, date } = field;
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/schedule/${user.scheduleId}`,
        { scheduleId: paramData, changes: { course, mentor, duration, date } },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex h-screen w-full flex-col gap-4 p-4'>
      <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className='relative top-[0px] h-fit w-[1099px] rounded-[10px] border border-solid border-[rgba(232,231,231,1)] bg-white'>
          <span className='relative left-[45px] top-[20px] text-4xl font-bold'>EDIT DATA JADWAL</span>
          <Link to='/dashboard/DashJad'>
            <button
              onClick={() => {
                setParamData('');
              }}
              className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br'
            >
              Kembali
            </button>
          </Link>
          {/* {field !== null && field.map((res)=>{
            return (<>
            
            </>)
          })} */}
          <form onSubmit={SubmitUpdate}>
            <div className='mt-14 flex'>
              <div className='ml-12 mr-3 w-full'>
                <span className='mt-10 text-xl font-bold'>Tanggal</span>
                <input
                  type='date'
                  name='date'
                  id='date'
                  value={field.date}
                  onChange={onChangeHandler}
                  className='pl-3 mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
                />
              </div>
            </div>
            <div className='ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>Pelajaran</span>
              <input
                type='text'
                name='course'
                id='course'
                value={field.course}
                onChange={onChangeHandler}
                className='pl-3 mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <div className='ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>Mentor</span>
              <input
                type='text'
                name='mentor'
                id='mentor'
                value={field.mentor}
                onChange={onChangeHandler}
                className='pl-3 mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <div className='ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>Jam Durasi</span>
              <input
                type='number'
                name='duration'
                id='duration'
                value={field.duration}
                onChange={onChangeHandler}
                className='pl-3 mb-5 mt-5 h-[50px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <button className='relative mt-10 mb-5 h-[45px] w-[143.48px]  rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br sm:left-[781px] lg:left-[902px]'>
              EDIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
