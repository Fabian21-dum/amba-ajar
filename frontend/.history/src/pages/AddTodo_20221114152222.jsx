import React from 'react';
import { Link } from 'react-router-dom';

export default function AddTodo(){
    return(

   
   
    
      <div className="flex w-min flex-col gap-4 p-4">
        <div className='flex h-2/3 w-min flex-row justify-center gap-4'>
        <div className="relative bg-white border-solid border w-[1167px] h-max top-[0px] border-[rgba(232,231,231,1)] rounded-[10px]">
          <div className="flex-container-1">
            <span className="relative left-[45px] top-[20px] font-bold text-4xl">TO DO LIST</span>
            <Link to='/dashboard/AddTodo'>
            <button className="absolute w-[143.48px] h-[45px] right-[50px] top-[20px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Tambah Data</button>
            </Link>
          </div>
          
    </div>
    </div>
    </div> 
        
    
   
  );
}