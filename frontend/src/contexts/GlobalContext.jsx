import React, { createContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  //   const STATUS = {
  //     STARTED: 'Started',
  //     STOPPED: 'Stopped',
  //   };
  const [timeSession, setTimeSession] = useState(1);
  const [timeBreak, setTimeBreak] = useState(1);

  const [secondsRemaining, setSecondsRemaining] = useState(timeSession * 60);
  const [stop, setStop] = useState(false);

  const [status, setStatus] = useState('Stopped');
  const [start, setStart] = useState(false);

  const [title, setTitle] = useState('Session');

  const [timeActivity, setTimeActivity] = useState(2);

  const [dataHari, setDataHari] = useState({
    Senin: 0,
    Selasa: 0,
    Rabu: 0,
    Kamis: 0,
    Jumat: 0,
    Sabtu: 0,
    Minggu: 0,
  });

  const [barData, setBardata] = useState([0, 0, 0, 0, 0, 0, 0]);

  const [hari, setHari] = useState(null);

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
    const { Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu } = dataHari;
    const name = hari;
    const time = timeActivity / 60;

    const menit = Math.round(time * 10) / 10;

    setDataHari({ ...dataHari, [name]: menit });

    setBardata([Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu]);
  };

  const [paramData, setParamData] = useState(null);
  const [dataJadwal, setDataJadwal] = useState([]);
  const [dataTodo, setDataTodo] = useState([]);
  const funct = {
    Increment,
    Decrement,
    useInterval,
    StoreActivity,
  };

  //Handling Section
  const [fetchStatus, setFetchStatus] = useState(true);
  const [inputLogin, setInputLogin] = useState({
    nama: '',
    email: '',
    password: '',
  });

  const HandlingInputLogin = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputLogin({ ...inputLogin, [name]: value });
    console.log(inputLogin);
  };

  const RemoveToken = () => {
    let navigate = useNavigate();
    Cookies.remove('token');
    navigate('/Login');
  };

  const handling = {
    HandlingInputLogin,
    RemoveToken,
  };

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
    dataHari,
    setDataHari,
    stop,
    setStop,
    inputLogin,
    setInputLogin,
    fetchStatus,
    setFetchStatus,
    paramData,
    setParamData,
    dataJadwal,
    setDataJadwal,
    dataTodo,
    setDataTodo,
  };

  return <GlobalContext.Provider value={{ state, funct, handling }}>{children}</GlobalContext.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalContext, GlobalProvider };
