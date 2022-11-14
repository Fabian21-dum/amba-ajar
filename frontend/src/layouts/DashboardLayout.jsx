import React, { useContext, useEffect } from 'react';
import RootLayout from './RootLayout';
import SideBar from '../components/Sidebar';
import NavDashboard from '../components/NavbarDashboard';
import { Outlet } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import useSound from 'use-sound';
import { mySound } from '../assets/';

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
    dataHari,
    setDataHari,
    stop,
  } = state;
  const { useInterval, StoreActivity } = funct;
  const [playSound] = useSound(mySound);

  useEffect(() => {
    const localStorageSecond = JSON.parse(localStorage.getItem('Pomodoro'));
    const localStorageTime = JSON.parse(localStorage.getItem('timeActivity'));
    const localStorageData = JSON.parse(localStorage.getItem('dataActivity'));
    const localStorageStop = JSON.parse(localStorage.getItem('dataActivity'));
    if (localStorageSecond) {
      setSecondsRemaining(localStorageSecond);
      setStart(!start);
      if (!localStorageStop) {
        setStatus('Started');
      }
    }
    if (localStorageTime) {
      setTimeActivity(localStorageTime);
    }
    if (localStorageData) {
      setDataHari(localStorageData);
    }
  }, []);

  useInterval(() => {
    setTimeActivity(timeActivity + 1);
    StoreActivity();
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
      if (secondsRemaining === 8) {
        playSound();
      }
    },
    status === 'Started' ? 1000 : null
    // passing null stops the interval
  );

  // useEffect(() => {
  //   const currentTime = new date();
  // }, []);

  window.addEventListener('beforeunload', () => {
    if (status === 'Started' || stop === true) {
      localStorage.setItem('Pomodoro', JSON.stringify(secondsRemaining));
      if (stop === true) {
        localStorage.setItem('Stop', JSON.stringify(stop));
      }
    } else {
      localStorage.removeItem('Pomodoro');
    }
    localStorage.setItem('timeActivity', JSON.stringify(timeActivity));
    localStorage.setItem('dataActivity', JSON.stringify(dataHari));
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
