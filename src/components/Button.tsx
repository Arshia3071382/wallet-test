import React from 'react'

type IButton = {
    name : string
}

function Button({name} : IButton) {
  return (
    <div>
        <button className='py-2 px-4 bg-gray-100 rounded hover:bg-sky-500 hover:text-white'>{name}</button>
    </div>
  )
}

export default Button