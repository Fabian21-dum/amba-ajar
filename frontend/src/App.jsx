import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, NotFoundPage, LoginPage, RegisterPage } from './pages';

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
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
