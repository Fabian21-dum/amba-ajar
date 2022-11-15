import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';
import jwt from 'jwt-decode';

export default function DashboardSettings() {
  const [field, setField] = useState({ email: '', name: '' });
  const [fieldPassword, setFieldPassword] = useState({ newPassword: '', oldPassword: '' });

  const [username, setUser] = useState({});
  useEffect(() => {
    const token = jsCookie.get('token');
    const user = jwt(token);
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
    const { email, name } = username;
    console.log(email, name);
    setField({ email, name });
    console.log(field);
  }, []);
  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    setFieldPassword({ ...fieldPassword, [e.target.name]: e.target.value });
    console.log(field);
    console.log(fieldPassword);
  };

  const SubmitUpdate = async (event) => {
    const token = jsCookie.get('token');
    const user = jwt(token);
    event.preventDefault();
    try {
      let { name } = field;
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user/${user.id}`,
        { changes: { name } },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const SubmitChange = async (event) => {
    const token = jsCookie.get('token');
    const user = jwt(token);
    event.preventDefault();
    try {
      let { oldPassword, newPassword } = field;
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/user/${user.id}/password`,
        { newPassword, oldPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='flex h-screen w-full flex-col gap-4 p-7'>
        <div className='h-full w-full rounded-2xl bg-white p-8'>
          <div className='flex flex-col gap-7'>
            <div>
              <h2 className='mb-1 text-4xl font-bold'>PENGATURAN</h2>
              <p>Tempat mengatur kembali keterangan mengenai profil akun yang kalian miliki.</p>
            </div>
            <div className='flex h-full w-full items-center justify-between rounded-3xl border-2 p-4 shadow-lg '>
              <div className='flex h-full items-center gap-6'>
                <div className='h-20 w-20 rounded-full bg-black'></div>
                <div className='flex h-full flex-col justify-between'>
                  <p className='text-xl font-bold'>Upload File terbaru</p>
                  <input type='file' name='' id='' />
                </div>
              </div>
              <button
                type='button'
                className='mr-2 mb-2 max-h-12 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
              >
                Simpan
              </button>
            </div>
            <div className='flex h-full w-full gap-6'>
              <div className='w-1/2 rounded-3xl border-2 p-5 shadow-lg'>
                <p className='text-xl font-bold'>UPDATE PASSWORD</p>
                <form onSubmit={SubmitChange}>
                  <div className='mb-6'>
                    <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Current Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      name='oldPassword'
                      onChange={onChangeHandler}
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                      placeholder='Current Password'
                      required
                    />
                  </div>
                  <div className='mb-6'>
                    <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                      New PassWord
                    </label>
                    <input
                      type='password'
                      id='newPassword'
                      name='newPassword'
                      onChange={onChangeHandler}
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                      placeholder='New Password'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='ml-[80%] mb-2 max-h-12 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
                  >
                    Simpan
                  </button>
                </form>
              </div>
              <div className='w-1/2 rounded-3xl border-2 p-5 shadow-lg'>
                <p className='text-xl font-bold'>INFORMASI PRIBADI</p>
                <form onSubmit={SubmitUpdate}>
                  <div className='mb-6'>
                    <label
                      htmlFor='email'
                      name='email'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={field.email}
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                      placeholder='email'
                      required
                      readOnly
                    />
                  </div>
                  <div className='mb-6'>
                    <label
                      htmlFor='text'
                      name='name'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type='text'
                      id='text'
                      name='name'
                      value={field.name}
                      onChange={onChangeHandler}
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                      placeholder='nama'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='ml-[80%] mb-2 max-h-12 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
                  >
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
