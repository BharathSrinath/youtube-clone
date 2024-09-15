import React from 'react';

const Button = ({name}) => {
  return (
    <button className='p-2 m-1 bg-gray-200 rounded-lg cursor-pointer whitespace-nowrap'>{name}</button>
  )
}

export default Button