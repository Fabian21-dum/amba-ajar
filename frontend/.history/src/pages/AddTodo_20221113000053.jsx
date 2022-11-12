import React from 'react';
import { Link } from 'react-router-dom';

export default function AddTodo(){
    return(

   
   
    
      <div className="flex pt-8 pl-16 pb-5 ">

        <div className="relative bg-white border-solid border w-[1167px] h-fit top-[0px] drop-shadow-lg border-[rgba(232,231,231,1)] rounded-[10px]">
          <div className="flex-container-1">
            <span className="relative left-[45px] top-[20px] font-bold text-4xl">Tambah Data To-Do List</span>
            <Link to='/dashboard/Todo'>
            <button className="absolute mb-3 mt-5 ml-[558px] w-[143.48px] h-[45px] drop-shadow-lg bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Kembali</button>
            </Link>
          </div>
          <div className=" w-full p-2 rounded-[10px] flex">
                <div className='ml-10 mt-10'>
                  <span className='text-xl font-bold'>Tanggal</span>
                  <input type="date" name="tanggal" id="tanggal" className='mr-10 mt-5 drop-shadow-lg rounded-[15px] border-solid border-2 border-black w-[1000px] h-[40px]'/>
                  <div className='mt-5'>
                    <span className='text-xl font-bold'>To-Do</span>
                  </div>
                  <input type="text" name="todo" id="todo" className='mr-10 mt-5 drop-shadow-lg rounded-[15px] border-solid border-2 border-black w-[1000px] h-[400px]'/>
                  <button className="relative mb-3 mt-5 ml-[925px] w-[143.48px] h-[45px] drop-shadow-lg bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Tambah</button>

                </div>
                </div>
              
            </div>
        </div>
        
    
   
  );
}