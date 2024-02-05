import React from 'react';
import 'globals.css';
import PropTypes from 'prop-types';

const styleClassess = {
  default: 'bg-gray-200 w-full px-4 py-3 rounded-full',
  home: 'bg-gray-200 w-[100%] px-4 py-3 rounded-full',
  explore: 'bg-gray-200 w-[85%] px-4 py-3 rounded-full',
  addthumbnail:
    'bg-white w-[100%] px-4 py-3 rounded-full border-4 border-gray-100',
  'thumbnail-text':
    'w-[100%] border-b pb-4 border-gray-700 text-[35px] font-bold',
    message: 'bg-gray-100 w-full px-4 py-3 rounded-full'
};

const Input = ({ hint, style }) => {
  return (
    <>
      <input placeholder={hint} className={`${styleClassess[style]}`} />
    </>
  );
};

Input.propTypes = {
  hint: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['default', 'home', 'explore', 'addthumbnail', 'message']),
};

Input.defaultProps = {
  style: 'default',
};

export default Input;
