import React from 'react';
import { Link } from 'react-router-dom';




export default function DashJad(){
    return(
   
    
      <div className="flex h-screen w-full flex-col gap-4 p-4">
         <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
          <div className='flex h-full w-[340px] flex-col gap-4 '>

        <div className="relative bg-white border-solid border w-[1167px] h-fit top-[0px] drop-shadow-lg border-[rgba(232,231,231,1)] rounded-[10px]">
          <div className="flex-container-1">
            <span className="relative left-[45px] top-[20px] font-bold text-4xl">Jadwal</span>
            <Link to='/dashboard/AddTodo'>
            <button className="absolute w-[143.48px] h-[45px] right-[50px] top-[20px] drop-shadow-lg bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Tambah Data</button>
            </Link>
          </div>
          <div className="table w-full p-2 rounded-[10px]">
        <table className="bg-white mt-10 mb-5 w-full border rounded-[30px]">
            <thead>
                <tr className="bg-white-30 border-b">
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            Tanggal
                           
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            Pelajaran
                            
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            Pengajar
                            
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            Durasi Waktu
                            
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            Action
                           
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                
                
                
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">20 September 2022</td>
                    <td className="p-2 border-r">Matematika</td>
                    <td className="p-2 border-r">Matt Watson</td>
                    <td className="p-2 border-r">60 menit</td>

                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">20 September 2022</td>
                    <td className="p-2 border-r">Matematika</td>
                    <td className="p-2 border-r">Matt Watson</td>
                    <td className="p-2 border-r">60 menit</td>

                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">20 September 2022</td>
                    <td className="p-2 border-r">Matematika</td>
                    <td className="p-2 border-r">Matt Watson</td>
                    <td className="p-2 border-r">60 menit</td>

                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">20 September 2022</td>
                    <td className="p-2 border-r">Matematika</td>
                    <td className="p-2 border-r">Matt Watson</td>
                    <td className="p-2 border-r">60 menit</td>

                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
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
