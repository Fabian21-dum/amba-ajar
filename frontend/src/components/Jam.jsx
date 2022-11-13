import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function Jam() {
  const [waktu, setWaktu] = useState(null);
  const [hari, setHari] = useState(null);
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
