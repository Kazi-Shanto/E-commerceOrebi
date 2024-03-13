import React from 'react'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import BannerBottom from '../../Components/BannerBottom'
import Offer from '../../Components/Offer'
import Headline from '../../Components/Headline'
import NewArrivals from '../../Components/NewArrivals'
import NewArrivalsTwo from '../../Components/NewArrivalsTwo'
import Clock from '../../Clock'
import SpecialOffers from '../../Components/SpecialOffers'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <div className='bg-[#008000]/25'>
        <Navbar></Navbar>
        <Header></Header>
        <Banner></Banner>
        <BannerBottom></BannerBottom>
        <Offer></Offer>
        <Headline></Headline>
        <NewArrivals></NewArrivals>
        <NewArrivalsTwo/>
        <Clock/>
        <SpecialOffers/>
        <Footer/>
    </div>
  )
}

export default Home