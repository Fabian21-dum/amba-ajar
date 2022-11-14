import React from 'react';
import { Link } from 'react-router-dom';

export default function AddJad(){
    return(

   
   
    
      <div className="flex h-screen w-full flex-col gap-4 p-4">
         <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
         <div className='h-fit w-[80%] rounded-xl bg-white p-4 md:flex md:w-fit md:flex-row-reverse md:gap-16 md:p-24'>
          <div className="flex-container-1">
            <span className="relative left-[45px] top-[20px] font-bold text-4xl">Tambah Data Jadwal</span>
            <Link to='/dashboard/Todo'>
            <button className="absolute mb-3 mt-5 ml-[600px] w-[143.48px] h-[45px] drop-shadow-lg bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Kembali</button>
            </Link>
          </div>
          <div className=" w-full p-2 rounded-[10px] flex">
                <div className='ml-10 mt-10'>
                  <span className='text-xl font-bold'>Tanggal</span>
                  <input type="date" name="tanggal" id="tanggal" className='mr-10 mt-5 drop-shadow-lg rounded-[15px] border-solid border-2 border-black w-[1000px] h-[40px]'/>
                  <div className='mt-5'>
                    <span className='text-xl font-bold'>Pelajaran</span>
                  </div>
                  <input type="text" name="pelajaran" id="pelajaran" placeholder='Matematika' className='pl-2 mr-10 mt-5 drop-shadow-lg rounded-[15px] border-solid border-2 border-black w-[1000px] h-[40px]'/>
                  <div className='mt-5'>
                    <span className='text-xl font-bold'>Mentor</span>
                  </div>
                  <input type="text" name="mentor" id="mentor" placeholder='John Doe' className='pl-2 mr-10 mt-5 drop-shadow-lg rounded-[15px] border-solid border-2 border-black w-[1000px] h-[40px]'/>
                  <div className='mt-5'>
                    <span className='text-xl font-bold'>Durasi</span>
                  </div>
                  <input type="text" name="durasi" id="durasi" placeholder='60 Menit' className='pl-2 mr-10 mt-5 drop-shadow-lg rounded-[15px] border-solid border-2 border-black w-[1000px] h-[40px]'/>
                  <button className="relative mb-3 mt-5 ml-[925px] w-[143.48px] h-[45px] drop-shadow-lg bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Tambah</button>

                </div>
                </div>
              
            </div>
        </div>
        </div>
        
    
   
  );
}