import React from 'react'
import Ads from '../components/home/Ads'
import Endorsement from '../components/home/Endorsement'
import GettingStartedSteps from '../components/home/GettingStartedSteps'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import Subscribe from '../components/home/Subscribe'

const Home = () => {
  return (
    <div>
        <Hero />
        <GettingStartedSteps />
        <Service />
        <Ads />
        {/* <Endorsement /> */}
        <Subscribe />
    </div>
  )
}

export default Home