import React from 'react'

const Button = (props) => {

  return (
    <>
    <button className='py-3 px-6 text-white bg-gray-500 rounded' onClick={props.onClick}>
        {props.title}
    </button>
    </>
  )
}

export default Button