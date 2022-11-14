import React from 'react';
import { Link } from 'react-router-dom';

export default function AddTodo(){
    return(

   
   
    
      <div className="flex w-full flex-col gap-4 p-4">
        <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className="relative bg-white border-solid border w-[1167px] h-fit top-[0px] border-[rgba(232,231,231,1)] rounded-[10px]">
          <div className="flex-container-1">
            <span className="relative left-[45px] top-[20px] font-bold text-4xl">TO DO LIST</span>
            <Link to='/dashboard/AddTodo'>
            <button className="absolute w-[143.48px] h-[45px] right-[50px] top-[20px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Tambah Data</button>
            </Link>
          </div>
          <div className="flex w-full p-2 rounded-[10px]">
          <div className='ml-10 mt-10'>
                  <span className='text-xl font-bold'>Tanggal</span>
                  <input type="date" name="tanggal" id="tanggal" className='mr-10 mt-5 rounded-[15px] border-solid border-2 border-black w-[1000px] h-[40px]'/>
                  <div className='mt-5'>
                    <span className='text-xl font-bold'>To-Do</span>
                  </div>
                  <input type="text" name="todo" id="todo" className='mr-10 mt-5 rounded-[15px] border-solid border-2 border-black w-[1000px] h-[400px]'/>
                  <button className="relative mb-3 mt-5 ml-[925px] w-[143.48px] h-[45px]  bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Edit</button>

                </div>
                </div>
    </div>
    </div>
    </div> 
        
    
   
  );
}