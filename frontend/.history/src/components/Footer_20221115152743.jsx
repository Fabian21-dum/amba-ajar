import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-100'>
      <div className='container mx-auto px-6 py-8'>
        <div className='flex justify-center w-full flex-wrap items-center '>
          <div className='flex justify-center w-full text-center md:w-1/4 md:text-left'>
            <p className='text-xl text-slate-100'>
              © 2022{' '}
              <a href='#' className='text-slate-100 hover:text-slate-200'>
                WiPro
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
