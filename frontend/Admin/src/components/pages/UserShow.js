import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Dashboard.css';

const UserShow = ()=>{

  return(
    <div className="container">
      <div className="card w-100 mt-3">
        <div className="text-uppercase card-header d-flex justify-content-between pt-3">
          <h4 className="text-center" style={{fontWeight: 'bold' }}>
            User Info 
          </h4>
          <span><Link to="/dashboard">Back</Link></span>
        </div>
        </div>
    </div>
    )
}

export default UserShow;