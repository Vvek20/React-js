import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img src="" alt='hero' />
          </div>
          <p>collection</p>
          <p>For everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src='' alt='' />
        </div>
      </div>
      <div className='hero-right'>
        <img src='e-commerce/public/photos/katuva.avif' alt='' />
      </div>
    </div>
  )
}

export default Hero