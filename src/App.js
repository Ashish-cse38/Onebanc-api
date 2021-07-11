import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './right-arrow.png';
import check from './check.png';
import link from './link.png';
import Larrow from './left-arrow.png';

const App = () => {
  let userId = '1';
  let recipientId = '2';
  const [data, setData] = useState([]);
  
  const val = '';
  const [arr1, setArr1] = useState([]);

  const month_name = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'};
  
  const getData = () => {
    fetch('https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId='+userId+'&recipientId='+recipientId)
    .then(res => {
      return res.json()})
    .then(text => {
      console.log(text);
      console.log(text.transactions);
      return text.transactions;
    })
    .then(val => {
      const arr = [];
      const other = [];
      val.forEach(e => {
        arr.push(e);
        if (e.startDate.substring(0,10)!== val) {
          other.push(e.id);
          val = e.startDate.substring(0,10);
        }
      });
      setData(arr);
      setArr1(other);
      console.log(data);
      console.log(arr1);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div id="App" className="container App my-3 py-3 px-0">
      <div className="user_info d-flex mb-3">
        <img className="icon-medium mx-3" src={Larrow} alt="missing-img"></img>
        <div className="circle mb-2 mx-2">
          <h1 className="my-2">J</h1>
        </div>
        <div>
          <h4>John Doe</h4>
          <h5>+91 123 456 7899</h5>
        </div>
      </div>
        
        {data.map((d) => {
           return <div key={d.id}
                  >
                
                <div className="my-2">
                  {arr1.includes(d.id) ? 
                    <div className="date">
                      {d.startDate.substring(8,10)}-{month_name[d.startDate.substring(5,7)]}
                    </div> : ''
                  }
                
                  <div
                    className="mt-4"
                    style={d.direction === 1 ? {display:'flex', justifyContent: 'flex-end'} : {display: 'flex'}}
                  >
                    <div
                      className="mx-3 col-md-6"
                    >
                      <div className="box py-3">
                      <div className="px-3 py-3 d-flex justify-content-between">
                        <h1>₹  {d.amount}</h1>
                        {d.direction === 1 ? d.type === 2 ?
                          <div className="d-flex">
                            <div className="mt-3 px-2">
                              <img className="icon-small" src={link} alt="missing-img"></img>
                            </div>
                            <h5 className="mt-3">You Requested</h5> 
                          </div>: 
                          <div className="d-flex">
                            <div className="mt-3 px-2">
                              <img className="icon-small" src={check} alt="missing-img"></img>
                            </div>
                            <h5 className="mt-3">You Paid</h5> 
                          </div>
                          :
                          d.type === 2 ?
                          <div className="d-flex">
                            <div className="mt-3 px-2">
                              <img className="icon-small" src={link} alt="missing-img"></img>
                            </div>
                            <h5 className="mt-3">Request Received</h5> 
                          </div> : 
                          <div className="d-flex">
                            <div className="mt-3 px-2">
                              <img className="icon-small" src={check} alt="missing-img"></img>
                            </div>
                            <h5 className="mt-3">You Received</h5> 
                          </div>
                        }
                      </div>

                      <div className="d-flex justify-content-between">
                        {d.type === 2 ? 
                          d.direction === 2 ?
                          <div className="px-3">
                            <button className="px-3">
                              Pay
                            </button>
                            <button className="mx-3 px-3">
                              Reject
                            </button>
                         
                          </div> :
                          <div className="px-3">
                          <button className="px-3">
                            Cancel
                          </button>
                        
                        </div> :
                        <div className="px-3">
                          <h6 className="ml-3">Transaction id: {d.id}</h6>
                        </div>
                        
                        }
                        <div className="px-3">
                          <img className="icon d-flex justify-content-end" src={arrow} alt="missing-img"></img>
                        </div>
                      </div>

                      </div>

                      <div className="col-md-12 mt-2"
                        style={{display:'flex', justifyContent: 'flex-end'}}
                      >
                        {d.startDate.substring(0,10)},{d.startDate.substring(11,13) >= 12 ? 
                          <div>
                            {d.startDate.substring(11,13)-12}{d.startDate.substring(13,16)} PM
                          </div>
                          : 
                          d.startDate.substring(11,13) === '00' ? 
                          <div>
                            12{d.startDate.substring(13,16)} AM
                          </div> :
                          <div>
                          {d.startDate.substring(11,13)}{d.startDate.substring(13,16)} AM
                          </div>
                        }
                      </div>
                        
                    </div>
                    
                  </div>
                  
                </div>
             </div>
        
        })}
       
   
      
    </div>
  );
}

export default App;
