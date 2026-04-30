import React from 'react'
import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout'
import HomePartners from './HomePartners'
import HomeWorks from './HomeWorks'
import HomeAboutSecondary from './HomeAboutSecondary'

const HomeContent = () => {
  return (
    <main className='content'>
      <HomeHero />
      <HomeAbout />
      <HomePartners />
      <HomeWorks />
      <HomeAboutSecondary />
    </main>
  )
}

export default HomeContent
