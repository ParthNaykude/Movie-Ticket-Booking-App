import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import TrailerSection from '../components/TrailerSection'

const Home = () => {
  return (
    <div>
      {/* console.log('Home component rendering'); */}
      <HeroSection/>
      <FeatureSection/>
      <TrailerSection/>
    </div>
  )
}

export default Home
