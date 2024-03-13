import React, { useState } from 'react'
import Container from './Container'
import List from './List'
import ListItem from './ListItem'
import imageBlank from '../assets/imageBlank.png'

const Header = () => {
    const [showCatagory, setShowCatagory] = useState(false)
    const handleCatagory = () => {
        setShowCatagory(!showCatagory);
    }
    const [showCart, setShowCart] = useState(false)
    const handleCart = () => {
        setShowCart(!showCart);
    }
    const [showAcc, setShowAcc] = useState(false)
    const handleAcc = () => {
        setShowAcc(!showAcc)
    }
    return (
        <div>
            <div className='bg-quaternary py-6'>
                <Container className='flex items-center justify-between'>
                    <div>
                        <div onClick={handleCatagory} className='flex items-center gap-x-1 relative'>

                            <div>
                                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626" />
                                    <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626" />
                                </svg>
                            </div>

                            <div>
                                <p className='text-sm font-dm text-primary'>Shop by Category</p>
                            </div>

                            {
                                showCatagory &&
                                <div className='w-[263px] bg-[#262626] absolute top-[54px] left-0 z-10'>
                                    <List>
                                        <ListItem className='font-dm text-sm text-[#BEBEBE] py-4 pl-5 border-b-[1px] border-[#2D2D2D] duration-300 hover:text-white hover:ml-3' itemName='Accesories'></ListItem>
                                        <ListItem className='font-dm text-sm text-[#BEBEBE] py-4 pl-5 border-b-[1px] border-[#2D2D2D] duration-300 hover:text-white hover:ml-3' itemName='Furniture'></ListItem>
                                        <ListItem className='font-dm text-sm text-[#BEBEBE] py-4 pl-5 border-b-[1px] border-[#2D2D2D] duration-300 hover:text-white hover:ml-3' itemName='Electronics'></ListItem>
                                        <ListItem className='font-dm text-sm text-[#BEBEBE] py-4 pl-5 border-b-[1px] border-[#2D2D2D] duration-300 hover:text-white hover:ml-3' itemName='Clothes'></ListItem>
                                        <ListItem className='font-dm text-sm text-[#BEBEBE] py-4 pl-5 border-b-[1px] border-[#2D2D2D] duration-300 hover:text-white hover:ml-3' itemName='Bags'></ListItem>
                                        <ListItem className='font-dm text-sm text-[#BEBEBE] py-4 pl-5 border-b-[1px] border-[#2D2D2D] duration-300 hover:text-white hover:ml-3' itemName='Home appliances'></ListItem>
                                    </List>
                                </div>
                            }

                        </div>
                    </div>
                    <div className='relative'>
                        <input type="text" className='py-4 pl-[21px] h-[50px] w-[601px]' placeholder='Search Products' />

                        <svg className='absolute top-[19px] right-[20px]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6409 10.6979L15.7505 13.8074C16.0405 14.1006 16.0405 14.5747 15.7474 14.8678L14.8647 15.7505C14.5747 16.0437 14.1006 16.0437 13.8074 15.7505L10.6979 12.6409C10.5575 12.5006 10.4795 12.3103 10.4795 12.1107V11.6023C9.37856 12.4632 7.99376 12.9747 6.48733 12.9747C2.9037 12.9747 0 10.071 0 6.48733C0 2.9037 2.9037 0 6.48733 0C10.071 0 12.9747 2.9037 12.9747 6.48733C12.9747 7.99376 12.4632 9.37856 11.6023 10.4795H12.1107C12.3103 10.4795 12.5006 10.5575 12.6409 10.6979ZM2.49513 6.48733C2.49513 8.69552 4.28226 10.4795 6.48733 10.4795C8.69552 10.4795 10.4795 8.6924 10.4795 6.48733C10.4795 4.27914 8.6924 2.49513 6.48733 2.49513C4.27914 2.49513 2.49513 4.28226 2.49513 6.48733Z" fill="#262626" />
                        </svg>

                    </div>
                    <div className='flex items-center gap-x-10'>
                        <div onClick={handleAcc} className='relative'>
                            <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5953 3.85284C10.5953 5.98094 8.87057 7.70569 6.74248 7.70569C4.61438 7.70569 2.88963 5.98094 2.88963 3.85284C2.88963 1.72475 4.61438 0 6.74248 0C8.87057 0 10.5953 1.72475 10.5953 3.85284ZM8.93679 8.6689H9.43946C11.6729 8.6689 13.485 10.4809 13.485 12.7144V13.9666C13.485 14.7642 12.8378 15.4114 12.0401 15.4114H1.44482C0.647157 15.4114 0 14.7642 0 13.9666V12.7144C0 10.4809 1.81204 8.6689 4.04549 8.6689H4.54816C5.2194 8.97592 5.95987 9.1505 6.74248 9.1505C7.52508 9.1505 8.26856 8.97592 8.93679 8.6689Z" fill="#262626" />
                                <path d="M24.6056 6H32.3944C32.9333 6 33.2027 6.63741 32.8213 7.01097L28.9283 10.8266C28.6922 11.0578 28.3078 11.0578 28.0717 10.8266L24.1787 7.01097C23.7973 6.63741 24.0667 6 24.6056 6Z" fill="#262626" />
                            </svg>

                            {
                                showAcc &&
                                <div className='absolute w-[200px] top-[25px] right-0 shadow z-10'>
                                    <div>
                                        <button className='px-[59px] py-4 bg-primary font-dm text-sm text-white'>My Account</button>
                                    </div>
                                    <div>
                                        <button className='px-[73px] py-4 bg-white font-dm text-sm text-primary'>Log Out</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div onClick={handleCart} className='relative'>

                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8966 9.0698L17.3195 2.80893C17.4223 2.35689 17.0787 1.92642 16.6151 1.92642H4.79221L4.51631 0.577625C4.44757 0.241435 4.15174 0 3.80857 0H0.722408C0.323428 0 0 0.323428 0 0.722408V1.20401C0 1.60299 0.323428 1.92642 0.722408 1.92642H2.82591L4.9404 12.2639C4.43453 12.5548 4.09365 13.1003 4.09365 13.7258C4.09365 14.6567 4.84832 15.4114 5.77926 15.4114C6.71021 15.4114 7.46488 14.6567 7.46488 13.7258C7.46488 13.254 7.27083 12.8277 6.95848 12.5217H13.2689C12.9566 12.8277 12.7625 13.254 12.7625 13.7258C12.7625 14.6567 13.5172 15.4114 14.4482 15.4114C15.3791 15.4114 16.1338 14.6567 16.1338 13.7258C16.1338 13.0584 15.7458 12.4816 15.1832 12.2085L15.3493 11.4778C15.452 11.0258 15.1084 10.5953 14.6449 10.5953H6.56539L6.36839 9.63211H15.1922C15.5295 9.63211 15.8218 9.39871 15.8966 9.0698Z" fill="#262626" />
                            </svg>

                            {
                                showCart &&
                                <div className='shadow z-10 absolute top-[30px] right-0'>

                                    <div className='bg-[#F2F2F2] py-5 px-5'>

                                        <div className='flex items-center'>
                                            <div>
                                                <img src={imageBlank} alt="" />
                                            </div>
                                            <div className='ml-5 mr-[78px]'>
                                                <h1 className='font-dm text-sm text-primary font-bold'>Black Smart Watch</h1>
                                                <p className='font-dm text-sm text-primary font-bold'>$44.00</p>
                                            </div>
                                            <div>

                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.89545 5L9.73835 2.1571C10.0872 1.80824 10.0872 1.24261 9.73835 0.893466L9.10653 0.261648C8.75767 -0.0872159 8.19205 -0.0872159 7.8429 0.261648L5 3.10455L2.1571 0.261648C1.80824 -0.0872159 1.24261 -0.0872159 0.893466 0.261648L0.261648 0.893466C-0.0872159 1.24233 -0.0872159 1.80795 0.261648 2.1571L3.10455 5L0.261648 7.8429C-0.0872159 8.19176 -0.0872159 8.75739 0.261648 9.10653L0.893466 9.73835C1.24233 10.0872 1.80824 10.0872 2.1571 9.73835L5 6.89545L7.8429 9.73835C8.19176 10.0872 8.75767 10.0872 9.10653 9.73835L9.73835 9.10653C10.0872 8.75767 10.0872 8.19205 9.73835 7.8429L6.89545 5Z" fill="#262626" />
                                                </svg>

                                            </div>
                                        </div>

                                    </div>

                                    <div className='bg-white'>
                                        <div className='px-5 pt-[14px] pb-5'>
                                            <div>
                                                <p className='font-dm font-bold text-base text-primary'><span className='text-secondary font-regular font-dm text-base'>Subtotal: </span>$44.00</p>
                                            </div>
                                            <div className='pt-[13px] flex gap-x-5'>
                                                <div>
                                                    <button className='w-[148px] h-[50px] border-2 border-primary text-primary font-bold'>View Cart</button>
                                                </div>
                                                <div>
                                                    <button className='w-[148px] h-[50px] bg-primary border-2 border-primary text-tertiary font-bold'>Check Out</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                </Container>

            </div>
        </div>
    )
}

export default Header