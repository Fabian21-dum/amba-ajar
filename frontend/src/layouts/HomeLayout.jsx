import React from 'react';
import PropTypes from 'prop-types';
import RootLayout from './RootLayout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomeLayout({ children }) {
  return (
    <RootLayout>
      <Navbar />
      {children}
      <Footer />
    </RootLayout>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
