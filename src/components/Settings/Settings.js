import React ,{useEffect,useState} from 'react';
import "./Settings.css";
import Tabs, {Tab} from 'react-best-tabs';
import Wallet from "../Wallet/Wallet"
import 'react-best-tabs/dist/index.css';
import {useSelector,useDispatch } from "react-redux";
import Card from "../../components/Cards/Profile/Profile"
import Others from '../Others/Others';


const data={data1:"Chinaza",data2:"Ogbonna",data3:"Mosesogbonna68@gmail.com",data4:"Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius."
,data5:"0939333333333"}


export default function Settings() {
  const [accountInfo,SetAccountInfo]=useState(data)
  const SettingsTab=useSelector(state=> state.SettingsTab)
  console.log(SettingsTab)
  const [selectedTab,SetSelectedTab]=useState(SettingsTab)

 

  useEffect(()=>{
   
    SetSelectedTab(SettingsTab)

  },[selectedTab , SettingsTab])
  
  
  return (
    <div className='Settings'>
      {console.log(SettingsTab)}

       <Tabs
        activeTab={selectedTab}
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
          
          <Tab title="Others" className="mr-3">
              <div className="mt-3">

                <div className="OthersContainer">
                    <Others/>
                </div>

              </div>
          </Tab>
         
      </Tabs>
    </div>
  )
}
