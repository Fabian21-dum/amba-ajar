import React, { useEffect, useState, useContext } from 'react';
import { Quote, Jam, Kalender, ChartBar, ToDoListDash, ScheduleDash, ProfileDash, Pomodoro } from '../../components';
import jsCookie from 'js-cookie';
import { Link, Navigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import axios from 'axios';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function DashboardPage() {
  const { state } = useContext(GlobalContext);
  const { setDataJadwal, dataJadwal, setDataTodo, dataTodo } = state;

  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = jsCookie.get('token');
    const user = jwt(token);
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data.user);
      } catch (err) {
        setIsAuth(false);
      }
    };
    fetchUser();

    const jadwal = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/schedule/${user.scheduleId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setDataJadwal(response.data.schedules);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    jadwal();

    const todo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/todo/${user.todoId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDataTodo(response.data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    todo();
  }, []);

  return (
    <>
      {!isAuth && <Navigate to='/login' />}
      <div className='flex h-screen w-full flex-col gap-4 p-4'>
        <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
          <div className='flex h-full w-1/4 flex-col gap-4 '>
            <div className='h-1/2 rounded-xl bg-white p-4 shadow-xl'>
              <Pomodoro />
            </div>
            <div className='h-1/2 rounded-xl bg-white p-4  shadow-xl'>
              <p className='text-center font-bold'>AKTIVITAS</p>
              <ChartBar />
            </div>
          </div>
          <div className='flex w-2/4 flex-col gap-4'>
            <div className='flex h-[80px] items-center justify-center rounded-xl bg-[#079ABB] text-center text-3xl font-bold text-white shadow-xl'>
              <Jam />
            </div>
            <div className='flex h-full flex-col items-center justify-between rounded-xl bg-white p-5 shadow-xl'>
              <ToDoListDash todo={dataTodo} />
            </div>
          </div>
          <div className='flex h-full w-1/4 flex-col gap-4 '>
            <div className='h-1/2 rounded-xl bg-white p-3 shadow-xl'>
              <ProfileDash user={user} />
            </div>
            <div className='h-1/2 rounded-xl bg-white p-2 shadow-xl'>
              <Kalender />
            </div>
          </div>
        </div>
        <div className='flex h-1/3 w-full flex-row justify-center gap-4'>
          <div className='h-full w-[1024px] rounded-xl bg-white p-4 shadow-xl'>
            <div className='flex justify-between px-4'>
              <div>
                <h3 className='text-xl font-bold mt-2'>JADWAL</h3>
              </div>
              <div>
                <Link to={'/dashboard/dashjad'}>
                  <button
                    type='button'
                    className='hoversbg-gradient-to-br mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-md shadow-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-300'
                  >
                    Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
            <ScheduleDash jadwal={dataJadwal} />
          </div>
          <div className='h-full w-[310px] rounded-xl bg-[#079ABB] py-5 px-4 text-white shadow-xl'>
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
}
