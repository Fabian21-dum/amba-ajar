import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';




export default function DashTodo(){
    return(
   
    
        <div className="flex w-full flex-col gap-4 p-4">
        <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className="flex bg-white border-solid border w-[1167px] h-fit top-[0px] border-[rgba(232,231,231,1)] rounded-[10px]">
            <div>
          <div className="flex-container-1">
            <span className="flex left-[45px] top-[20px] font-bold text-4xl">TO DO LIST</span>
            <Link to='/dashboard/AddTodo'>
            <button className="flex w-[143.48px] h-[45px] right-[50px] top-[20px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] rounded-[10px] text-white text-center hover:bg-gradient-to-br">Tambah Data</button>
            </Link>
          </div>
          <div className="table w-full p-2 rounded-[10px]">
        <table className="bg-white mt-10 mb-5 w-full border rounded-[30px]">
            <thead>
                <tr className="bg-white-30 border-b">
                    <th className="border-r p-2">
                        
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            ID
                           
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            Tanggal
                            
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-white-500">
                        <div className="flex items-center justify-center">
                            Catatan
                            
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
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">1</td>
                    <td className="p-2 border-r">20 September 2022</td>
                    <td className="p-2 border-r">Pelajari Vim</td>
                    <td>
                        <Link to='/dashboard/EditTodo'>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        </Link>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">2</td>
                    <td className="p-2 border-r">21 September 2022</td>
                    <td className="p-2 border-r">Tugas Bahasa Inggris</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">3</td>
                    <td className="p-2 border-r">21 September 2022</td>
                    <td className="p-2 border-r">Pelajari RUST</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">4</td>
                    <td className="p-2 border-r">21 September 2022</td>
                    <td className="p-2 border-r">Pelajari Node</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">5</td>
                    <td className="p-2 border-r">21 September 2022</td>
                    <td className="p-2 border-r">Pelajari Laravel</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">6</td>
                    <td className="p-2 border-r">21 September 2022</td>
                    <td className="p-2 border-r">Pelajari React.js</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">7</td>
                    <td className="p-2 border-r">22 September 2022</td>
                    <td className="p-2 border-r">Perbaiki tampilan situs</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">8</td>
                    <td className="p-2 border-r">22 September 2022</td>
                    <td className="p-2 border-r">Tugas Bahasa Indonesia</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">9</td>
                    <td className="p-2 border-r">22 September 2022</td>
                    <td className="p-2 border-r">Tugas Matematika</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>

                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
                    <td>
                        <button href="#" className=" mr-2 w-[69px] h-[29px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] rounded-[10px] text-white">Edit</button>
                        <button href="#" className=" w-[69px] h-[29px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] rounded-[10px] text-white">Hapus</button>
                    </td>
                </tr>
                <tr className="bg-white-100 text-center border-b text-sm text-white-600">
                    <td className="p-2 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td className="p-2 border-r">10</td>
                    <td className="p-2 border-r">28 Oktober 2022</td>
                    <td className="p-2 border-r">Belajar Vb</td>
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
DashTodo.propTypes = {
    children: PropTypes.node.isRequired,
  };
  