import React, { useContext, useEffect } from 'react';
import RootLayout from './RootLayout';
import SideBar from '../components/Sidebar';
import NavDashboard from '../components/NavbarDashboard';
import { Outlet } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';

export default function DashboardLayout() {
  const { state, funct } = useContext(GlobalContext);
  const {
    secondsRemaining,
    title,
    timeBreak,
    timeSession,
    setSecondsRemaining,
    setTitle,
    status,
    setStatus,
    start,
    setStart,
    timeActivity,
    setTimeActivity,
    barData,
    setBardata,
  } = state;
  const { useInterval, StoreActivity } = funct;

  useEffect(() => {
    const localStorageSecond = JSON.parse(localStorage.getItem('Pomodoro'));
    const localStorageTime = JSON.parse(localStorage.getItem('timeActivity'));
    const localStorageData = JSON.parse(localStorage.getItem('dataActivity'));
    console.log(localStorageTime);
    if (localStorageSecond) {
      setSecondsRemaining(localStorageSecond);
      setStart(!start);
      setStatus('Started');
    }
    if (localStorageTime) {
      setTimeActivity(localStorageTime);
    }
    if (localStorageData) {
      setBardata(localStorageData);
    }
    console.log(barData);
  }, []);

  useInterval(() => {
    setTimeActivity(timeActivity + 1);
    console.log(StoreActivity());
  }, 1000);

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        // setStatus(STATUS.STOPPED);
        if (title === 'Session') {
          setSecondsRemaining(timeBreak * 60);
          setTitle('Break');
        } else {
          setSecondsRemaining(timeSession * 60);
          setTitle('Session');
        }
      }
    },
    status === 'Started' ? 1000 : null
    // passing null stops the interval
  );

  // useEffect(() => {
  //   const currentTime = new date();
  // }, []);

  window.addEventListener('beforeunload', () => {
    if (status === 'Started') {
      localStorage.setItem('Pomodoro', JSON.stringify(secondsRemaining));
    } else {
      localStorage.removeItem('Pomodoro');
    }
    localStorage.setItem('timeActivity', JSON.stringify(timeActivity));
    localStorage.setItem('dataActivity', JSON.stringify(barData));
  });

  return (
    <RootLayout>
      <div className='bg-[#C7EBEC] lg:hidden'>
        <NavDashboard />
        <Outlet />
      </div>
      <div className='hidden lg:flex lg:bg-[#C7EBEC] '>
        <SideBar />
        <Outlet />
      </div>
    </RootLayout>
  );
}
