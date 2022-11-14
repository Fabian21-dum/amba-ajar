import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Jam() {
  const { state } = useContext(GlobalContext);
  const { hari, setHari } = state;
  const [waktu, setWaktu] = useState(null);

  useEffect(() => {
    const date = new Date();
    setInterval(() => {
      setWaktu(moment(new Date()).format('HH : mm : ss'));
    }, 1000);
    const today = date.getDay();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    setHari(days[today]);
  }, []);
  return (
    <>
      {hari} , {waktu}
    </>
  );
}
