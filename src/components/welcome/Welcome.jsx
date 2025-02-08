import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import GradientBackground from '../BackgroundGardient/GradientBackground'
import Overview from './Overview'
import KeyFeatures from './KeyFeatures'
import OurJourney from './OurJourney'
import Login from '../Login/Login'
import MeetOurTeam from './MeetOurTeam'
import Footer from './Footer'

const Welcome = () => {
  return (
    <div>
      <GradientBackground/>
      <Navbar/>
      <Hero/>
      <Overview/>
      <KeyFeatures/>
      <OurJourney/>
      <MeetOurTeam/>
    </div>
  )
}

export default Welcome
