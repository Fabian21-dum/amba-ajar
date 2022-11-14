import React from 'react';
import { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import { mySound } from '../assets/Index';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

export default function Pomodoro() {
  const [timeSession, setTimeSession] = useState(25);
  const [timeBreak, setTimeBreak] = useState(5);

  const [secondsRemaining, setSecondsRemaining] = useState(timeSession * 60);
  const [status, setStatus] = useState(STATUS.STOPPED);
  const [start, setStart] = useState(false);

  const [playSound, { stop }] = useSound(mySound);

  const [title, setTitle] = useState('Session');

  function Increment(event) {
    let id = event.target.id;
    if (id === 'Session') {
      if (timeSession !== 25) {
        setTimeSession(timeSession + 5);
        setSecondsRemaining(timeSession * 60);
      }
    } else {
      if (timeBreak !== 15) {
        setTimeBreak(timeBreak + 5);
        setSecondsRemaining(timeSession * 60);
      }
    }
  }
  function Decrement(event) {
    let id = event.target.id;
    if (id === 'Session') {
      if (timeSession !== 5) {
        setTimeSession(timeSession - 5);
      }
    } else {
      if (timeBreak !== 5) {
        setTimeBreak(timeBreak - 5);
      }
    }
  }

  const handleStart = () => {
    setStatus(STATUS.STARTED);
    setSecondsRemaining(timeSession * 60);
    setStart(!start);
  };
  const handleLanjut = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(timeSession * 60);
    setStart(!start);
    stop();
  };
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
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  //   const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const twoDigits = (num) => String(num).padStart(2, '0');

  if (secondsRemaining === 8) {
    playSound();
  }

  return (
    <>
      <div className='flex h-full flex-col items-center justify-between '>
        {!start ? (
          <>
            <h3 className='text-2xl font-bold'>POMODORO</h3>
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
                className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
              >
                Start
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className='text-2xl font-bold'>{title === 'Session' ? 'Waktunya Belajar' : 'Saatnya Istirahat'}</h3>
            <h3 className='text-6xl font-semibold'>
              {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
            </h3>
            <div className='flex'>
              <button
                onClick={handleReset}
                type='button'
                className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
              >
                RESET
              </button>
              {status === 'Stopped' ? (
                <>
                  <button
                    onClick={handleLanjut}
                    type='button'
                    className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
                  >
                    LANJUT
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleStop}
                    type='button'
                    className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
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
