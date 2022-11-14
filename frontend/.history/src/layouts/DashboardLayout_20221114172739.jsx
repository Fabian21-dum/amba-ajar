import React from 'react';
import RootLayout from './RootLayout';
import SideBar from '../components/Sidebar';
import NavDashboard from '../components/NavbarDashboard';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components';

export default function DashboardLayout() {
  return (
    <RootLayout>
      <div className='bg-[#C7EBEC] lg:hidden'>
        <NavDashboard />
        <Outlet />
      </div>
      <div className='hidden lg:flex lg:bg-[#C7EBEC] '>
        <SideBar />
        <Outlet />
      </div>
    </RootLayout>

  );
}
