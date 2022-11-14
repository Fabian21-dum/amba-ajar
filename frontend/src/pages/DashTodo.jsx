import React from 'react';
import { Link } from 'react-router-dom';

export default function DashTodo() {
  return (
    <div className='flex w-full flex-col gap-4 p-4'>
      <div className='flex h-2/3 w-full flex-row justify-center gap-4'>
        <div className='relative top-[0px] h-fit w-[1167px] rounded-[10px] border border-solid border-[rgba(232,231,231,1)] bg-white drop-shadow-lg'>
          <div className='flex-container-1'>
            <span className='relative left-[45px] top-[20px] text-4xl font-bold'>TO DO LIST</span>
            <Link to='/dashboard/AddTodo'>
              <button className='absolute right-[50px] top-[20px] h-[45px] w-[143.48px] rounded-[10px] bg-gradient-to-r from-[rgba(25,201,229,1)] to-[rgba(7,154,187,1)] text-center text-white drop-shadow-lg hover:bg-gradient-to-br'>
                Tambah Data
              </button>
            </Link>
          </div>
          <div className='table w-full rounded-[10px] p-2'>
            <table className='mt-10 mb-5 w-full rounded-[30px] border bg-white'>
              <thead>
                <tr className='bg-white-30 border-b'>
                  <th className='border-r p-2'></th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>ID</div>
                  </th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>Tanggal</div>
                  </th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>Catatan</div>
                  </th>
                  <th className='text-white-500 cursor-pointer border-r p-2 text-sm font-thin'>
                    <div className='flex items-center justify-center'>Action</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' checked />
                  </td>
                  <td className='border-r p-2'>1</td>
                  <td className='border-r p-2'>20 September 2022</td>
                  <td className='border-r p-2'>Pelajari Vim</td>
                  <td>
                    <Link to='/dashboard/EditTodo'>
                      <button
                        href='#'
                        className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>2</td>
                  <td className='border-r p-2'>21 September 2022</td>
                  <td className='border-r p-2'>Tugas Bahasa Inggris</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>3</td>
                  <td className='border-r p-2'>21 September 2022</td>
                  <td className='border-r p-2'>Pelajari RUST</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>4</td>
                  <td className='border-r p-2'>21 September 2022</td>
                  <td className='border-r p-2'>Pelajari Node</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>5</td>
                  <td className='border-r p-2'>21 September 2022</td>
                  <td className='border-r p-2'>Pelajari Laravel</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>6</td>
                  <td className='border-r p-2'>21 September 2022</td>
                  <td className='border-r p-2'>Pelajari React.js</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>7</td>
                  <td className='border-r p-2'>22 September 2022</td>
                  <td className='border-r p-2'>Perbaiki tampilan situs</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>8</td>
                  <td className='border-r p-2'>22 September 2022</td>
                  <td className='border-r p-2'>Tugas Bahasa Indonesia</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>9</td>
                  <td className='border-r p-2'>22 September 2022</td>
                  <td className='border-r p-2'>Tugas Matematika</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>

                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr className='bg-white-100 text-white-600 border-b text-center text-sm'>
                  <td className='border-r p-2'>
                    <input type='checkbox' />
                  </td>
                  <td className='border-r p-2'>10</td>
                  <td className='border-r p-2'>28 Oktober 2022</td>
                  <td className='border-r p-2'>Belajar Vb</td>
                  <td>
                    <button
                      href='#'
                      className=' mr-2 h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(51,121,246,1)] to-[rgba(26,90,227,1)] text-white'
                    >
                      Edit
                    </button>
                    <button
                      href='#'
                      className=' h-[29px] w-[69px] rounded-[10px] bg-gradient-to-br from-[rgba(247,116,116,1)] to-[rgba(230,51,51,1)] text-white'
                    >
                      Hapus
                    </button>
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
