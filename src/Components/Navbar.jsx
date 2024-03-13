import React, { useState } from 'react'
import Container from './Container'
import List from './List'
import ListItem from './ListItem'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const handleNav = () => {
        setShowNav(!showNav)
    }
    return (
        <div>


            <Container>
                <div className='flex py-8 items-center'>
                    <div className='w-[62%]'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div onClick={handleNav} className='ml-auto md:hidden'>
                        <FaBars />
                    </div>
                    <div className={`w-[38%] bg-white md:bg-transparent w-[200px] sm:w-[400px] md:w-full h-screen md:h-auto fixed md:static duration-300 ${showNav ? 'top-0 left-0':'top-0 left-[-400px]'} p-6 md:p-0 z-10 shadow md:shadow-none items-center justify-between md:flex`}>
                        
                        <List className='md:flex items-center gap-x-10'>
                            <Link to='/home'>
                                <ListItem className='text-primary font-bold text-sm font-dm hover:text-secondary' itemName='Home' />
                            </Link>

                            <Link to='/shop'>
                                <ListItem className='text-secondary font-bold text-sm font-dm hover:text-primary' itemName='Shop' />
                            </Link>

                            <Link to='/about'>
                                <ListItem className='text-secondary font-bold text-sm font-dm hover:text-primary' itemName='About' />
                            </Link>

                            <Link to='/contacts'>
                                <ListItem className='text-secondary font-bold text-sm font-dm hover:text-primary' itemName='Contacts' />
                            </Link>

                            <Link to='/journal'>
                                <ListItem className='text-secondary font-bold text-sm font-dm hover:text-primary' itemName='Journal' />
                            </Link>
                        </List>

                        <div>
                            <button className='text-primary font-bold text-sm font-dm'>EN/BN</button>
                        </div>
                    </div>
                </div>
            </Container>



        </div>
    )
}

export default Navbar