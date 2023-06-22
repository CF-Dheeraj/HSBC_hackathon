import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <video src='/videos/bankers.mp4' autoPlay loop muted></video>
        <div className='hero-text-content'>
            <h1>Earn,Borrow and <br/>trade with HSBC</h1>
            <p>HSBC trader allows you to earn interest, borrow and<br/><br/> trade cryptos while ensuring maximum security for your digital assets</p>
        </div>
        

    </div>
  )
}

export default Hero