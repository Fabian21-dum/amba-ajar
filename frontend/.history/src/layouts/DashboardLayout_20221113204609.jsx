import React from 'react';
import RootLayout from './RootLayout';
import SideBar from '../components/Sidebar';
import NavDashboard from '../components/NavbarDashboard';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <RootLayout>
      <NavDashboard />
      <div className='bg-[#C7EBEC] lg:hidden'>
        
        <Outlet />
      </div>
      <div className='hidden lg:flex lg:bg-[#C7EBEC] '>
        <SideBar />
        <Outlet />
      </div>
    </RootLayout>
  );
}
