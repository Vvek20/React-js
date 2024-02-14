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
            <img src="https://unsplash.com/photos/woman-in-black-hijab-and-black-abaya-2eC_-0yRrGU" alt='hero' />
          </div>
          <p>collection</p>
          <p>For everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src='' alt=''/>
        </div>
      </div>
      <div className='hero-right'>
        <img src='' alt=''/>
      </div>


    </div>




  )
}

export default Hero