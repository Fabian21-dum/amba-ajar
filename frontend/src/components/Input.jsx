import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ nama, type, placeholder, handle, value }) {
  return (
    <div className='mb-6'>
      <label htmlFor={nama} className='mb-2 block text-sm font-bold text-gray-900 dark:text-gray-300'>
        {nama}
      </label>
      <input
        type={type}
        id={nama}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-lg'
        placeholder={placeholder}
        required=''
        onChange={handle}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  nama: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
