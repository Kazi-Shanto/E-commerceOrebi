import React from 'react'
import clockPhone from '../src/assets/clock.png'
import Container from './Components/Container'


const Clock = () => {
    return (
        <div className='py-32'>
            <Container>
                <img src={clockPhone} alt="" />
            </Container>
        </div>
    )
}

export default Clock