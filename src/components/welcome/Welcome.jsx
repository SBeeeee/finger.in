import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import GradientBackground from './GradientBackground'
import Overview from './Overview'
import KeyFeatures from './KeyFeatures'
import OurJourney from './OurJourney'
import Login from '../Login/Login'

const Welcome = () => {
  return (
    <div>
      <GradientBackground/>
      <Navbar/>
      <Hero/>
      <Overview/>
      <KeyFeatures/>
      <OurJourney/>
    </div>
  )
}

export default Welcome
