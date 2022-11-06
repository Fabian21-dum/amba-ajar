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
    switch (today) {
      case 0:
        setHari('Minggu');
        break;
      case 1:
        setHari('Senin');
        break;
      case 2:
        setHari('Selasa');
        break;
      case 3:
        setHari('Rabu');
        break;
      case 4:
        setHari('Kamis');
        break;
      case 5:
        setHari('Jumat');
        break;
      case 6:
        setHari('Sabtu');
        break;
    }
  }, []);
  return (
    <>
      {hari} , {waktu}
    </>
  );
}
