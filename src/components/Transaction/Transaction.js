import './Transaction.css';
import Tabs, {Tab} from 'react-best-tabs';
import {Alert,AlertTitle} from '@mui/material';
import 'react-best-tabs/dist/index.css';
import {useState} from "react";
import Pagination from '@mui/material/Pagination';

import Card from "../../components/Cards/multiPurposeCards/MultiPurposeCards"
import MDatePicker from '../MDatePicker/MDatePicker';


const data=[{data1:"2/3/2022",data2:"29393838383",data3:" 9000",data4:"Wallet Funding",data5:"successful"},
{data1:"2/3/2022",data2:"99999992022",data3:" 9000",data4:"project payment",data5:"successful"},
{data1:"2/3/2022",data2:"2003393933",data3:"9000",data4:"Wallet Funding",data5:"pending"},
{data1:"2/3/2022",data2:"3939393999",data3:"9000",data4:"project payment",data5:"successful"},
{data1:"2/3/2022",data2:"0000000032",data3:"9000",data4:"Wallet Funding",data5:"pending"},
{data1:"2/3/2022",data2:"33030300303",data3:"9000",data4:"project payment",data5:"successful"}]
export default function Transaction() {
  const [transaction,setTransaction]=useState(data)
  const [currentPage, setCurrentPage] = useState(1);

  
  function filterTransaction(val1,val2){
    if(val2===''){
      return ''
    }
    else{
      const result = val2.filter(obj => obj.data5===val1);
      return result
    }
     
  } 

  
  const handlePageChange = (event, page) => {

    console.log(page)
    setCurrentPage(page);
  };

/*
  useEffect(()=>{
    setTransaction(data)
  },[data])
  */
  return (
    <div className='Transaction'>
    
      <Tabs
        activeTab="1"
        className=""
        ulClassName=""
        activityClassName="bg-success"
        onClick={(event, tab) =>{/* console.log(event, tab)*/}}
      >
          <Tab title="All" className="mr-3">
                <div className="mt-3">

                      <div className="datePickerContainer">
                        <div className="datePickerContainerPosition">
                          <MDatePicker className="datePicker"/>
                        </div>
                      </div>
                    {transaction?
                      <div className='transactionMobile'>
                      <Card dataP={transaction} typeP="transaction" />


                      
                      <div className="Pagination">

                          { transaction.length>10

                            ?
                            <Pagination count={10} page={currentPage} onChange={handlePageChange}  color="primary"   />

                            :
                            <Pagination count={10} page={currentPage} disabled onChange={handlePageChange}  color="primary"   />

                          }

                      </div>
                </div> 
              :
                <Alert severity="info" className="empty">
                <AlertTitle>Info</AlertTitle>
                  Transaction — <strong>you have no transaction!</strong>
                </Alert>
              }
                   
               
                  
              </div>
          </Tab>
          <Tab title="Successful" className="mr-3">
                <div className="mt-3">
                { filterTransaction("successful",transaction)?
                   <div className='transactionMobile'>
                  
                      <Card dataP={ filterTransaction("successful",transaction)} typeP="transaction" />
                      <div className="Pagination">

                          { transaction.length>10

                            ?
                            <Pagination count={10} page={currentPage} onChange={handlePageChange}  color="primary"   />

                            :
                            <Pagination count={10} page={currentPage} disabled onChange={handlePageChange}  color="primary"   />

                          }

                      </div>
                   </div> 
                :
                <Alert severity="info" className="empty">
                <AlertTitle>Info</AlertTitle>
                  Transaction — <strong>you have no successful!</strong>
                </Alert>
                }
                   
                </div>
          </Tab>
          <Tab title="Pending" className="mr-3">
              <div className="mt-3">
                {filterTransaction("pending",transaction)?
                        <div className='transactionMobile'>
                      
                        <Card dataP={filterTransaction("pending",transaction)} typeP="transaction" />


                        <div className="Pagination">

                          { transaction.length>10

                            ?
                            <Pagination count={10} page={currentPage} onChange={handlePageChange}  color="primary"   />

                            :
                            <Pagination count={10} page={currentPage} disabled onChange={handlePageChange}  color="primary"   />

                          }

                        </div>


                      </div> 
                :
                <Alert severity="info" className="empty">
                <AlertTitle>Info</AlertTitle>
                  Transaction — <strong>you have no pending!</strong>
                </Alert>
                }    
              </div>
          </Tab>
      </Tabs>
    </div>
  )
}
