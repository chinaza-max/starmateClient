import './Dashboard.css';

import React from 'react'
import Button from '../../components/styledComponent/ButtonNoIcon.styled';
import Table2 from "../../components/MyTable/Tables2/Tables2";
import Table3 from "../../components/MyTable/Tables3/Tables3";
import Alert from '@mui/material/Alert';
import Card from '../../components/materialUI/Card/Card';
import Card2 from "../../components/Cards/multiPurposeCards/multiPurposeCards"
import {useState} from "react";


import img from "../../images/image16.png"



export default function Dashboard() {
  const [transaction,setTransaction]=useState('d');
  const [project,setProject]=useState('d');

  const data=[{data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
  {data1:"2/4/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
  {data1:"2/5/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
  {data1:"2/6/2022",data2:"1/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
  {data1:"2/7/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
  {data1:"2/8/2022",data2:"5/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"}]

  const data3=[{data1:"big joe house",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"20%"},
  {data1:"big joe house",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"20%"},
  {data1:"tery builging",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"100%"},
  {data1:"big joe house",data2:"1/3/2022",data3:"fumigation",data4:"9000",data5:"80%"},
  {data1:"lodo plaza",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"40%"},
  {data1:"plaza",data2:"5/3/2022",data3:"fumigation",data4:"9000",data5:"20%"}]

  const data2=[{data1:"2/3/2022",data2:"29393838383",data3:" 9000",data4:"Wallet Funding",data5:"successful"},
  {data1:"2/4/2022",data2:"99999992022",data3:" 9000",data4:"project payment",data5:"successful"},
  {data1:"2/5/2022",data2:"2003393933",data3:"9000",data4:"Wallet Funding",data5:"successful"},
  {data1:"2/6/2022",data2:"3939393999",data3:"9000",data4:"project payment",data5:"successful"},
  {data1:"2/7/2022",data2:"0000000032",data3:"9000",data4:"Wallet Funding",data5:"pending"},
  {data1:"2/8/2022",data2:"33030300303",data3:"9000",data4:"project payment",data5:"successful"}]
  
  
  
  
  
  return (
    <div className='Dashboard'>
      <ul>
          <li className='cards'>

            <ul className='cardsContent'>
              <li> 
                <div>
                    <h3>you have no active </h3>
                    <div>
                      <Button  id="callButton" ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                        <h5>
                            Book now
                        </h5>
                      </Button>
                    </div>
                </div>
              </li>
              <li>
                <div>
                <h3>Request an instant service!</h3>
                    <div>
                      <Button  id="callButton" ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                        <h5> 
                          Request
                        </h5>
                      </Button>
                    </div>
                </div>
              </li>
              <li>
                <div>
                
                <h5>Earn up to 20% commission when you <br/>refer someone !</h5>
                    <div>
                      <Button  id="callButton" ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                        <h5>
                            
                            Refer now
                        </h5>
                      </Button>
                    </div>
                </div>
              </li>
            </ul>

          </li>
          <li className='pending'>
                {project?
                      <>
                        <div className='pendingContainer project'>
                          <h2 className="tableHead table">Pending project</h2>
                          <Table3 dataP={data} tableTypeP="Pending" />
                        </div>

                        <div className='projectMobile'>
                            <h1 className="cardHead">Pending project</h1>
                            <Card2 dataP={data} typeP="Pending"/>
                        </div>
                      </>
                      :
                      <>
                        <div className='pendingContainer emptyProject'>
                              <Card imageP={img}  titleP="Project" bodyP="you have no pending project" />
                        </div>
                      </>
                }
          </li>
          
          <li className='transaction'>
            {transaction?
              <>
                  <div className='containerTransaction Transaction'>
                      <h2 className="tableHead table">Transation</h2>
                      <Table2 dataP={data2} tableTypeP="Transation" />
                  </div>
                  <div className='projectMobile'>
                    <h1 className="cardHead">Transaction</h1>
                    <Card2 dataP={data2} typeP="transaction"/>
                  </div>
              </>
              :
              <div className='emptyTransaction'>
                    <Alert variant="outlined" severity="info">
                    Transaction — you have not done any  transaction 
                    </Alert>
              </div>
            }
          </li>
      </ul>
    </div>
  )
}

