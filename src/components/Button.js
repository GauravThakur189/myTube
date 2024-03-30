import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='mx-2 my-2 px-2 py-1 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button