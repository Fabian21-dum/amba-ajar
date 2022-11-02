import React from 'react';
import { Link } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

export default function NotFoundPage() {
  return (
    <RootLayout>
      {/* create a card */}
      <div className='bg-slate-1oo flex h-screen flex-col items-center justify-center p-4 text-xl'>
        <h1 className='text-6xl font-extrabold'>404</h1>
        <h2 className=' font-semibold'>Halaman tidak ditemukan</h2>
        <Link className='my-3 font-bold text-cyan-400 underline hover:text-cyan-500' to='/'>
          Kembali ke halaman utama
        </Link>
      </div>
    </RootLayout>
  );
}
