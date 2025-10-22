import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Carousel from '../carousel/Carousel'


import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>


        
        <Navbar/>
      
       
        <Carousel/>
       
        <Products/>
        <Footer/>
        
    </div>
  )
}

export default LandingPage