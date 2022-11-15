import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { GlobalContext } from '../contexts/GlobalContext';

export default function DashTodo() {
  const { state } = useContext(GlobalContext);
  const { setParamData, dataTodo, setDataTodo } = state;

  const token = Cookies.get('token');
  const user = decode(token);
  useEffect(() => {
    const todo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/todo/${user.todoId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDataTodo(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    todo();
  }, []);
  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className=' h-screen w-full rounded-[10px] border border-solid border-[rgba(232,231,231,1)] bg-white drop-shadow-lg'>
          <div>
            <span className='relative left-[45px] top-[20px] text-4xl font-bold'>TO DO LIST</span>
            <Link to='/dashboard/AddTodo'>
              <button className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br'>
                Tambah Data
              </button>
            </Link>
          </div>
          <div className='w-full rounded-[10px] border-slate-900 p-2'>
            <table className='mt-10 mb-5  w-full rounded-[30px] bg-white'>
              <thead>
                <tr className='bg-white-30 border-b'>
                  <th className='border-r p-2'></th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>ID</div>
                  </th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>Tanggal</div>
                  </th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>Catatan</div>
                  </th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>Action</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' name='check' />
                  </td>
                  <td className='border-r p-2'>1</td>
                  <td className='border-r p-2'>20 September 2022</td>
                  <td className='border-r p-2'>Pelajari Vim</td>
                  <td>
                    <Link to='/dashboard/EditTodo'>
                      <button
                        href='#'
                        className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
