import React, { useEffect, useContext } from 'react';
import { TODOLIST, JADWAL, SELESAI } from '../assets';
import PropTypes from 'prop-types';
import { GlobalContext } from '../contexts/GlobalContext';
import { Link } from 'react-router-dom';

function Icon() {
  const { state } = useContext(GlobalContext);
  const { dataJadwal, dataTodo, barData } = state;

  return (
    <>
      <div className='flex items-center justify-center'>
        <img src={JADWAL} alt='' className='mr-2 h-8' />
        <p className='font-bold'>{Math.round(barData.reduce((a, b) => a + b, 0))} </p>
      </div>
      <div className='flex items-center justify-center'>
        <img src={TODOLIST} alt='' className='mr-2 h-8' />
        <p className='font-bold'>{dataJadwal.length}</p>
      </div>
      <div className='flex items-center justify-center'>
        <img src={SELESAI} alt='' className='mr-2 h-8' />
        <p className='font-bold'>{dataTodo.length}</p>
      </div>
    </>
  );
}

export default function ProfileDash({ user }) {
  const [avatar, setAvatar] = React.useState('');

  const encodeAvatar = (buffer) => buffer.map((b) => String.fromCharCode(b)).join('');

  useEffect(() => {
    setTimeout(() => {
      const base64 = new String(encodeAvatar(user.avatar.data));
      if (!base64.startsWith('http')) setAvatar(`data:image/*;base64,${base64}`);
    }, 5000);
  }, [user]);

  return (
    <>
      <div className='h-full w-full'>
        <div className='flex justify-between'>
          <h3 className='text-2xl font-bold'>PROFILE</h3>
          <Link to={'Settings'}>
            <button
              type='button'
              className='mr-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-2.5 py-2 text-center text-sm font-medium text-white shadow-md shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300'
            >
              Edit
            </button>
          </Link>
        </div>
        <div className='mb-2 flex flex-col items-center'>
          <div className='h-20 w-20 overflow-hidden rounded-full bg-black'>
            <img src={avatar} alt='user avatar' />
          </div>
          <div className='text-2xl font-semibold'>{user.name || '-'}</div>
        </div>
        <div className='flex justify-around'>
          <Icon />
        </div>
      </div>
    </>
  );
}

ProfileDash.propTypes = {
  user: PropTypes.object,
};
