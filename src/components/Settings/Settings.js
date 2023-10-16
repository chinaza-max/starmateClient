import React ,{useEffect,useState} from 'react';
import "./Settings.css";
import Tabs, {Tab} from 'react-best-tabs';
import {Alert,AlertTitle} from '@mui/material';
import Wallet from "../Wallet/Wallet"
import 'react-best-tabs/dist/index.css';



import Card from "../../components/Cards/Profile/Profile"

export default function Settings() {
  const [accountInfo,SetAccountInfo]=useState('')
  
 


  useEffect(()=>{
    const data={data1:"Chinaza",data2:"Ogbonna",data3:"Mosesogbonna68@gmail.com",data4:"Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius."
              ,data5:"0939333333333"}
    SetAccountInfo(data)
  },[])

  
  return (
    <div className='Settings'>
       <Tabs
        activeTab="1"
        className=""
        ulClassName=""
        activityClassName="bg-success"
        onClick={(event, tab) =>{
          // console.log(event, tab)
          }}
      >
          <Tab title="Profile" className="mr-3" >
              <div className="mt-3">
                  <Card dataP={accountInfo}/>
              </div>
          </Tab>
          
          <Tab title="Wallet" className="mr-3">
              <div className="mt-3">
                <Wallet/>
              </div>
          </Tab>
          
          <Tab title="Logout" className="mr-3">
              <div className="mt-3">

                  <h1 className="cardHead">Logout</h1>
                
              </div>
          </Tab>
         
      </Tabs>
    </div>
  )
}
