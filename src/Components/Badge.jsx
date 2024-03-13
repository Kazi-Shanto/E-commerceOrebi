import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='absolute top-[20px] left-[20px] bg-primary py-2 px-8 font-bold text-tertiary text-sm'>{title}</span>
  )
}

export default Badge