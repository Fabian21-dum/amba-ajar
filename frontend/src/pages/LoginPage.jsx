import React, { useEffect, useState } from 'react';
import RootLayout from '../layouts/RootLayout';
import loginLogo from '../assets/image/Login.svg';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const [field, setField] = useState({ email: '', password: '' });
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = jsCookie.get('token');
    if (token) setIsAuth(true);
  }, []);

  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    if (field.password.length < 6) return alert('Password must be at least 6 characters');
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, field);
      jsCookie.set('token', data.token);
      if (data.token) setIsAuth(true);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <RootLayout>
      {isAuth && <Navigate to='/dashboard' />}
      <div className='flex h-screen w-full items-center justify-center bg-[#ABFBFE]'>
        <div className='h-fit w-[80%] rounded-xl bg-white p-4 md:flex md:w-fit md:flex-row-reverse md:gap-16 md:p-24'>
          <div className='mb-4 text-center  md:hidden'>
            <h1 className='text-2xl font-extrabold'>SELAMAT DATANG</h1>
            <h3 className='text-sm font-medium'>Selamat Datang Kembali Sob.</h3>
          </div>
          <div className='mx-auto'>
            <img src={loginLogo} alt='login' className='mx-auto h-48 md:h-80' width='100%' />
          </div>
          <div className='mx-auto flex flex-col items-center justify-center'>
            <div className='mb-4 hidden text-center md:block'>
              <h1 className='text-2xl font-extrabold lg:text-4xl'>SELAMAT DATANG</h1>
              <h3 className='text-md lg:text-1xl font-medium'>Selamat Datang Kembali Sob.</h3>
            </div>
            <div className='w-[90%] md:w-full'>
              <form onSubmit={loginHandler}>
                <Input name='email' type='email' placeholder='email@gmail.com' onChange={onChangeHandler} />
                <Input name='password' type='password' placeholder='password' onChange={onChangeHandler} />
                <button
                  type='submit'
                  className='w-full rounded-lg border border-black bg-[#BDF7F9] py-2.5  text-center text-sm font-bold text-black'
                >
                  Login
                </button>
              </form>
            </div>
            <div className='md:text-none mt-3 text-center'>
              <p>
                Tidak Punya Akun?
                <Link to={'/register'}>
                  {' '}
                  <span className='pointer text-[#1a8b8f]'>Daftar Sekarang</span>{' '}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
