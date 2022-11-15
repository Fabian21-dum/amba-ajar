import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Checkbox() {
  return (
    <>
      <Link to={'/dashboard/todo'}>
        <div className='mb-3 flex h-6 w-full items-center rounded-lg border-2 border-[#1fd0ec] p-5 hover:bg-[#1fd0ec]'>
          <div className='mr-4 flex items-center'>
            <p>Teks Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default function ToDoListDash({ todo }) {
  return (
    <>
      <p className='mb-3 text-2xl font-extrabold'>TO DO LIST</p>
      <div className='w-full'>
        {todo !== null &&
          todo.map((res) => {
            return (
              <>
                <Checkbox todolist={res} />
              </>
            );
          })}
        {todo === null && <p>tes</p>}
      </div>
      <button
        type='button'
        className='mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:shadow-lg dark:shadow-cyan-800/80 dark:focus:ring-cyan-800'
      >
        Selengkapnya
      </button>
    </>
  );
}

ToDoListDash.propTypes = {
  todo: PropTypes.array,
};
