import React from 'react'

interface IChildren {
    children: React.ReactNode
}

function Container({ children }: IChildren) {
  return (
    <div className='w-full max-w-8xl mx-auto  sm:px-6 lg:px-8'>
        {children}
    </div>
  )
}

export default Container