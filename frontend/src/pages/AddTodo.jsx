import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default function AddTodo() {
  const [field, setField] = useState({ title: '' });
  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    console.log(field);
  };

  const submitTodo = async (event) => {
    event.preventDefault();
    const token = Cookies.get('token');
    console.log(token);
    try {
      const user = jwtDecode(token);
      let { title } = field;
      console.log(title);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/todo/${user.todoId}`,
        { title },
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
    <div className='flex h-screen w-full flex-col gap-4 p-4'>
      <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className='relative top-[0px] h-fit w-[1099px] rounded-[10px] border border-solid border-[rgba(232,231,231,1)] bg-white'>
          <span className='relative left-[45px] top-[20px] text-4xl font-bold'>TAMBAH DATA TO DO LIST</span>
          <Link to='/dashboard/Todo'>
            <button className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br'>
              Kembali
            </button>
          </Link>
          <form onSubmit={submitTodo}>
            <div className='mt-12 ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>TO DO</span>
              <input
                type='text'
                name='title'
                id='title'
                onChange={onChangeHandler}
                className='pl-5 mb-5 mt-5 h-[100px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <button
              type='submit'
              className='relative mt-10 mb-5 h-[45px] w-[143.48px]  rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br sm:left-[781px] lg:left-[902px]'
            >
              Tambah
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
