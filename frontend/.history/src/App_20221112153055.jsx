import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, NotFoundPage, LoginPage, RegisterPage, DashboardPage } from './pages/index';
import DashboardLayout from './layouts/DashboardLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/dashboard' element={<DashboardPage />}> */}
        {/* <Route path='/profile' element-{<DashboardProfilePage/>} /> */}
        {/* </Route> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='Settings' element={<h1>hallo ini Settings</h1>} />
          <Route path='Create' element={<h1>hallo ini Create</h1>} />
          <Route path='Todo' element={<DashTodo />} />

        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
