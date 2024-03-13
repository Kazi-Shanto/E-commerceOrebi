import React from 'react'

const Headline = ({title, className}) => {
  return (
    <div className={`font-bold text-[39px] font-dm text-primary ${className}`}>{title}</div>
  )
}

export default Headline