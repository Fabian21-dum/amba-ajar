import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  NotFoundPage,
  LoginPage,
  RegisterPage,
  DashboardPage,
  DashTodo,
  AddTodo,
  EditTodo,
  DashJad,
  AddJad,
  EditJad,
  DashboardSettings,
} from './pages';

import DashboardLayout from './layouts/DashboardLayout';
import { GlobalProvider } from './contexts/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
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
            <Route path='Settings' element={<DashboardSettings />} />
            <Route path='Create' element={<h1>hallo ini Create</h1>} />
            <Route path='Todo' element={<DashTodo />} />
            <Route path='AddTodo' element={<AddTodo />} />
            <Route path='EditTodo' element={<EditTodo />} />
            <Route path='DashJad' element={<DashJad />} />
            <Route path='AddJad' element={<AddJad />} />
            <Route path='EditJad' element={<EditJad />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
