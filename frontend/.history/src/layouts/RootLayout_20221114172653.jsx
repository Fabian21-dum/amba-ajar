import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout({ children }) {
  return (
    <div className='app'>
      <AuthProvider>
        <main className='font-sans leading-relaxed text-slate-900'>{children}</main>
      </AuthProvider>
    </div>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
