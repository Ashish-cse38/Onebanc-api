import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
  let history = useHistory();
  const [userId, setUserId] = useState();
  const [recepientId, setRecepientId] = useState();

  const goto_info = () => {
    localStorage.setItem('userID', userId);
    localStorage.setItem('recepientID', recepientId);
    console.log(localStorage.getItem('userID'));
    console.log(localStorage.getItem('recepientID'));
    history.push('/info');
  }

  return (
    <div className="container d-flex justify-content-center">
      
      <div className="form">
        <div className="form-group"> 
          <h2>Enter User's Details</h2>
        </div>
        <div className="form-group mt-3">
          <label>
            Enter UserId
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => {setUserId(e.target.value)}}
          >
          </input>
        </div>
        <div className="form-group mt-3">
          <label>
            Enter RecepientId
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => {setRecepientId(e.target.value)}}
          >
          </input>
        </div>
        <div className="form-group mt-3 d-flex justify-content-center">
          <button 
            className="px-3"
            onClick={goto_info}
          >
            Enter
          </button>
        </div>
        
     </div>
    </div>
    
  );
}

export default Details;