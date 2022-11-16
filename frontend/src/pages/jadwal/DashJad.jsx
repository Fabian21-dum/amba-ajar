import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function DashJad() {
  const { state } = useContext(GlobalContext);
  const { setParamData, dataJadwal, setDataJadwal } = state;

  const token = Cookies.get('token');
  const user = decode(token);
  useEffect(() => {
    const jadwal = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/schedule/${user.scheduleId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDataJadwal(response.data.schedules);
      } catch (error) {
        console.log(error);
      }
    };
    jadwal();
  }, []);

  const deleteHandler = async (event) => {
    try {
      console.log(token);
      console.log(user.scheduleId);
      console.log(event.target.value);
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/schedule/${user.scheduleId}`, {
        data: { scheduleId: event.target.value },
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='flex h-screen w-full flex-col gap-4 p-4'>
        <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
          <div className='h-fit w-[1167px] rounded-[10px] border border-solid  border-[rgba(232,231,231,1)] bg-white drop-shadow-lg'>
            <div className='flex-container-1'>
              <span className='relative left-[45px] top-[20px] text-4xl font-bold'>Jadwal</span>
              <Link to='/dashboard/AddJad'>
                <button className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white drop-shadow-lg hover:bg-gradient-to-br'>
                  Tambah Data
                </button>
              </Link>
            </div>
            <div className='w-full rounded-[10px] p-2'>
              <table className='mt-10 mb-5 w-full rounded-[30px] border bg-white'>
                <thead>
                  <tr className='bg-white-30 border-b'>
                    <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                      <div className='flex items-center justify-center'>Tanggal</div>
                    </th>
                    <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                      <div className='flex items-center justify-center'>Pelajaran</div>
                    </th>
                    <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                      <div className='flex items-center justify-center'>Pengajar</div>
                    </th>
                    <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                      <div className='flex items-center justify-center'>Durasi Waktu</div>
                    </th>
                    <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                      <div className='flex items-center justify-center'>Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataJadwal !== null &&
                    dataJadwal.map((res) => {
                      return (
                        <>
                          <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                            <td className='border-r p-2'>{res.date}</td>
                            <td className='border-r p-2'>{res.course}</td>
                            <td className='border-r p-2'>{res.mentor}</td>
                            <td className='border-r p-2'>{res.duration} menit</td>

                            <td>
                              <Link to='/dashboard/EditJad'>
                                <button
                                  href='#'
                                  onClick={() => {
                                    setParamData(res.scheduleId);
                                  }}
                                  className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                                >
                                  Edit
                                </button>
                              </Link>
                              <button
                                href='#'
                                onClick={deleteHandler}
                                value={res.scheduleId}
                                className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                              >
                                Hapus
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
