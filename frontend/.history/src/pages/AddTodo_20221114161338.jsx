import React from 'react';
import { Link } from 'react-router-dom';

export default function AddTodo(){
    return(

   
   
    
      <div className="flex w-full flex-col gap-4 p-4">
        <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className="relative bg-white border-solid border w-[1099px] h-fit top-[0px] border-[rgba(232,231,231,1)] rounded-[10px]">
            <span className="relative left-[45px] top-[20px] font-bold text-4xl">TO DO LIST</span>
            <Link to='/dashboard/AddTodo'>
            <button className="absolute w-[143.48px] h-[45px] right-[50px] top-[20px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Kembali</button>
            </Link>
            <div className='flex mt-10'>
            <div className='ml-12 w-full mr-3'>
              <span className='text-xl font-bold mt-10'>Tanggal</span>
              <input type="date" name='tanggal' id='tanggal' className='mb-5 mt-5 rounded-[15px] border-solid border-2 border-black w-full h-[40px]' />
            </div>
            
          </div>
          <div className='ml-12 mr-3'>
              <span className='text-xl font-bold mt-10'>To-Do</span>
              <input type="text" name='todo' id='todo' className='mb-5 mt-5 rounded-[15px] border-solid border-2 border-black w-full h-[100px]' />
              <button className="relatives mb-5 w-[143.48px] h-[45px] left-full bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Tambah</button>
            </div>
          </div>
    </div>
    </div>
        
    
   
  );
}