import React from 'react'
import Container from './Container'
import hangingLight from '../assets/hangingLight.png'
import wallClock from '../assets/wallClock.png'
import lamp from '../assets/lamp.png'

const Offer = () => {
  return (
    <div className='pt-[140px] pb-32 px-40'>
        <Container className='flex gap-x-10'>
            <div>
                <img src={hangingLight} alt="" />
            </div>
            <div>
                <div className='pb-10'>
                    <img src={wallClock} alt="" />
                </div>
                <div>
                    <img src={lamp} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Offer