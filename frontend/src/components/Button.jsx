import React from 'react'

const Button = (props) => {

  return (
    <>
    <button className='font-medium w-full rounded-lg text-sm px-5 py-2.5 text-center text-white bg-gray-500' onClick={props.onClick}>
        {props.title}
    </button>
    </>
  )
}

export default Button