import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
export default function Input({ nama, type, placeholder, handle, value }) {
=======
export default function Input({ name, type, placeholder, onChange }) {
>>>>>>> origin
  return (
    <div className='mb-6'>
      <label htmlFor={name} className='mb-2 block text-sm font-bold text-gray-900 dark:text-gray-300'>
        {name}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-lg'
        placeholder={placeholder}
<<<<<<< HEAD
        required=''
        onChange={handle}
        value={value}
=======
        required
>>>>>>> origin
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
<<<<<<< HEAD
  handle: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
=======
  onChange: PropTypes.func,
>>>>>>> origin
};
