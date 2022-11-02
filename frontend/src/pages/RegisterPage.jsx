import React from 'react';
import RootLayout from '../layouts/RootLayout';
import { Link } from 'react-router-dom';
import registerLogo from '../assets/image/Register.svg';
import Input from '../components/Input';

export default function RegisterPage() {
  return (
    <>
      <RootLayout>
        <div className='flex h-screen w-full items-center justify-center bg-[#ABFBFE]'>
          <div className='h-fit w-[80%] rounded-xl border border-none bg-white p-4 md:flex md:w-fit md:flex-row-reverse md:gap-16 md:p-16'>
            <div className='mb-4 text-center  md:hidden'>
              <h1 className='text-sm font-medium'>daftar Sekarang</h1>
              <h3 className='text-2xl font-extrabold'>Buat Akun Baru</h3>
            </div>
            <div className='flex items-center justify-start '>
              <img src={registerLogo} alt='login' className='mr-auto ml-auto h-48 md:h-80' />
            </div>
            <div className='mx-auto flex flex-col items-center justify-center'>
              <div className='mb-4 hidden text-center md:block'>
                <h1 className='text-2xl font-extrabold lg:text-4xl'>daftar Sekarang</h1>
                <h3 className='text-md lg:text-1xl font-medium'>Selamat Datang Kembali Sob.</h3>
              </div>
              <div className='w-[90%] md:w-full'>
                <form>
                  <Input nama='nama' type='text' placeholder='Nama Lengkap' />
                  <Input nama='email' type='email' placeholder='email@gmail.com' />
                  <Input nama='password' type='password' placeholder='password' />
                  <button
                    type='Submit'
                    className='w-full rounded-lg border border-black bg-[#BDF7F9] py-2.5  text-center text-sm font-bold text-black '
                  >
                    Daftar
                  </button>
                </form>
              </div>
              <div className='md:text-none mt-3 text-center'>
                <p>
                  Sudah Punya Akun?
                  <Link to={'/login'}>
                    {' '}
                    <span className='pointer text-[#1a8b8f]'>Masuk Disini</span>{' '}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
