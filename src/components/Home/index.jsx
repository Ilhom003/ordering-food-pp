import React from 'react'
import Footer from '../Footer'
import Hero from './Hero'
import FoodTypes from './FoodTypes'
import Service from './Service'
import TastyTreat from './TastyTreat'
import Testmonial from './Testmonial'
import PopularFoods from './PopularFoods'

const Home = () => {
  return (
    <div>

      <Hero />
      <FoodTypes/>
      <Service/>
      <PopularFoods/>
      <TastyTreat/>
      <Testmonial/>
      <Footer />
      
      
    </div>
  )
}

export default Home