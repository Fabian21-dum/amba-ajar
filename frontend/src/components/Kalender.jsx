import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Kalendar.css';

export default function Kalender() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return <Calendar value={dateState} onChange={changeDate} />;
}
