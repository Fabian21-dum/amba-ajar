import React, { createContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  //   const STATUS = {
  //     STARTED: 'Started',
  //     STOPPED: 'Stopped',
  //   };
  const [timeSession, setTimeSession] = useState(25);
  const [timeBreak, setTimeBreak] = useState(5);

  const [secondsRemaining, setSecondsRemaining] = useState(timeSession * 60);

  const [status, setStatus] = useState('Stopped');
  const [start, setStart] = useState(false);

  const [title, setTitle] = useState('Session');

  const [timeActivity, setTimeActivity] = useState(2);

  const [barData, setBardata] = useState([0, 2, 0, 0, 0, 0, 0]);

  const [hari, setHari] = useState(null);

  const state = {
    timeSession,
    setTimeSession,
    timeBreak,
    setTimeBreak,
    secondsRemaining,
    setSecondsRemaining,
    status,
    setStatus,
    start,
    setStart,
    title,
    setTitle,
    timeActivity,
    setTimeActivity,
    barData,
    setBardata,
    hari,
    setHari,
  };

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

  const StoreActivity = () => {
    var data = barData;
    console.log(data);
    const time = timeActivity / 60;
    console.log(time);
    const menit = Math.round(time * 10) / 10;
    console.log(menit);
    switch (hari) {
      case 'Minggu':
        data[6].push(menit);
        break;
      case 'Senin':
        data[5].push(menit);
        break;
      case 'Selasa':
        data[4].push(menit);
        break;
      case 'Rabu':
        data[3].push(menit);
        break;
      case 'Kamis':
        data[2].push(menit);
        break;
      case 'Jumat':
        data[1].push(menit);
        break;
      case 'Sabtu':
        data[0].push(menit);
        break;
    }
    return data;
  };
  const funct = {
    Increment,
    Decrement,
    useInterval,
    StoreActivity,
  };
  return <GlobalContext.Provider value={{ state, funct }}>{children}</GlobalContext.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalContext, GlobalProvider };
