import React from 'react';
import PropTypes from 'prop-types';
import RootLayout from './RootLayout';

export default function DashboardLayout({ children }) {
  return (
    <RootLayout>
      {/* <DashboardNavBar /> */}
      {children}
    </RootLayout>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
