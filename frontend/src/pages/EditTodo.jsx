import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { GlobalContext } from '../contexts/GlobalContext';
import decode from 'jwt-decode';
import axios from 'axios';

export default function EditTodo() {
  const { state } = useContext(GlobalContext);
  const { paramData, setParamData, dataTodo } = state;

  const token = Cookies.get('token');
  const user = decode(token);
  const [field, setField] = useState({ title: '', isCompleted: false });

  useEffect(() => {
    const data = dataTodo.filter((res) => {
      return res.todoId == paramData;
    });
    console.log(data);
    setField(data[0]);
    console.log(field);
  }, []);

  const onChangeHandler = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
    console.log(field);
  };

  const SubmitUpdate = async (event) => {
    event.preventDefault();
    try {
      let { title, isCompleted } = field;
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/todo/${user.todoId}`,
        { todoId: paramData, changes: { title, isCompleted } },
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
          <span className='relative left-[45px] top-[20px] text-4xl font-bold'>EDIT DATA TO DO LIST</span>
          <Link to='/dashboard/Todo'>
            <button
              onClick={() => {
                setParamData('');
              }}
              className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br'
            >
              Kembali
            </button>
          </Link>
          <form onSubmit={SubmitUpdate}>
            <div className='mt-12 ml-12 mr-3'>
              <span className='mt-10 text-xl font-bold'>To-Do</span>
              <input
                type='text'
                name='title'
                id='title'
                value={field.title}
                onChange={onChangeHandler}
                className='pl-3 mb-5 mt-5 h-[100px] w-full rounded-[15px] border-2 border-solid border-black'
              />
            </div>
            <button className='relative mt-10 mb-5 h-[45px] w-[143.48px]  rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white hover:bg-gradient-to-br sm:left-[781px] lg:left-[902px]'>
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
