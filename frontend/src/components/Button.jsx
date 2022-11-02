import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children }) {
  return (
    <button
      className='relative z-10 rounded-xl bg-slate-900 px-7 py-4
      text-lg font-semibold text-slate-100 shadow-button hover:shadow-button-hover'
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
