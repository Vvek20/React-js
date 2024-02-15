import React from 'react'
import './Offers.css'
import product_1 from '../Assets/product_1.jpg'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>ONLY ON BETS SELLERS PRODUCTS</p>
        <button>Check Now</button>

      </div>
      <div className='offers-right'></div>
      <img src={product_1} alt=''/>
       
     </div>
   )
 }
 
 export default Offers