import React from 'react'
import LeftBar from '../LeftBar/LeftBar'
import Header from '../Header/Header'
import RightBar from '../RightBar/RightBar'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
    <LeftBar/>
    <Header/>
    <RightBar/>
    </div>
  )
}

export default Hero