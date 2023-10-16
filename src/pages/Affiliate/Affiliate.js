import './Affiliate.css';
import WcIcon from '@mui/icons-material/Wc';
import MoneyIcon from '@mui/icons-material/Money';
import PaymentIcon from '@mui/icons-material/Payment';


import React from 'react'

export default function Affiliate() {
  return (
    <div className='Affiliate'>
            
        <h3> Earn as you refer </h3>
        <ul> 
          <li> 
            <ul> 
              <li> <span> <WcIcon className='icons'/> </span> </li>
              <li><span> 10 </span>Referral </li>
            </ul>
          </li>

          <li> 
            <ul> 
              <li>  <span> <MoneyIcon className='icons'/> </span> </li>
              <li><span> 5 </span>Payout </li>
            </ul>
          </li>
          <li> 
            <ul> 
              <li> <span> <PaymentIcon className='icons'/> </span> </li>
              <li><span> NGN 4000 </span>Balance </li>
            </ul>
          </li>
        </ul>

        <p> Withdraw </p>


    </div>
  )
}



