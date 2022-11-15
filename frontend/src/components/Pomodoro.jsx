import React, { useContext } from 'react';
import useSound from 'use-sound';
import { mySound } from '../assets';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Pomodoro() {
  const { state, funct } = useContext(GlobalContext);
  const {
    timeSession,
    timeBreak,
    secondsRemaining,
    setSecondsRemaining,
    status,
    setStatus,
    start,
    setStart,
    title,
    setStop,
  } = state;

  const { Increment, Decrement } = funct;

  const [{ stop }] = useSound(mySound);

  const handleStart = () => {
    setStatus('Started');
    setSecondsRemaining(timeSession * 60);
    setStart(!start);
  };
  const handleLanjut = () => {
    setStatus('Started');
    setStop(false);
  };
  const handleStop = () => {
    setStatus('Stopped');
    setStop(true);
  };
  const handleReset = () => {
    setStatus('Stopped');
    setSecondsRemaining(timeSession * 60);
    setStart(!start);
    setStop(false);
    stop();
    localStorage.removeItem('Pomodoro');
  };

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  //   const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const twoDigits = (num) => String(num).padStart(2, '0');

  return (
    <>
      <div className='flex h-full flex-col items-center justify-between '>
        {!start ? (
          <>
            <h3 className='pt-4 text-2xl font-bold'>POMODORO</h3>
            <div className='flex w-full justify-around'>
              <div className='flex flex-col items-center'>
                <h3 className='font-bold'>SESSION</h3>
                <div className='flex items-center justify-center gap-2'>
                  <button className='text-lg font-extrabold' id='Session' onClick={Decrement}>
                    -
                  </button>
                  <p className='w-20 text-center'>{timeSession} Menit</p>
                  <button className='text-lg font-extrabold' id='Session' onClick={Increment}>
                    +
                  </button>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='font-bold'>BREAK</h3>
                <div className='flex items-center justify-center gap-2'>
                  <button className='text-lg font-extrabold' id='Break' onClick={Decrement}>
                    -
                  </button>
                  <p className='w-20 text-center'>{timeBreak} Menit</p>
                  <button className='text-lg font-extrabold' id='Break' onClick={Increment}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className='flex'>
              <button
                onClick={handleStart}
                type='button'
                className='mr-2 mb-3 w-24 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
              >
                Start
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className='text-2xl font-bold pt-3'>{title === 'Session' ? 'Waktunya Belajar' : 'Saatnya Istirahat'}</h3>
            <h3 className='text-6xl font-semibold'>
              {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
            </h3>
            <div className='flex'>
              <button
                onClick={handleReset}
                type='button'
                className='mr-2 mb-3 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
              >
                RESET
              </button>
              {status === 'Stopped' ? (
                <>
                  <button
                    onClick={handleLanjut}
                    type='button'
                    className='mr-2 mb-3 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
                  >
                    LANJUT
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleStop}
                    type='button'
                    className='mr-2 mb-3 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
                  >
                    STOP
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
