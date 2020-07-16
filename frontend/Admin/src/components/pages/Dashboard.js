import React,  { useState, useEffect } from 'react';
import {Table } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import { FindUsers } from '../../services/dashboard';
import Header from '../Header';
import '../../styles/Dashboard.css';

const Dashboard = ()=>{

  const [users, setUsers] = useState()

  useEffect(() => {
    FindUsers().then (res=>{
      // console.log(res.data.data)
      setUsers(res.data.data.users)
    })
  }, [])

   const header = ["S/NO", "Email", "User Role", "Joined"];

  return(
    <div className="container">
      <Header />
      <div className="card w-100 mt-3">
        <div className="text-uppercase card-header d-flex justify-content-center pt-3">
          <h4 className="text-center" style={{fontWeight: 'bold' }}>
            Admin Dashboard
          </h4>
        </div>
          <div className="card-body table-responsive">
            <Table>
                <thead>
                    <tr>{header.map((h, i) => <th className="card-heading text-uppercase" key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                {users && users.map((user, i) => {
                return (
                <tr key={user._id}>
                
                      <td>
                        <Link to="/dashboard/{user/_id}">
                          {i+1}
                         </Link> 
                      </td>   
                      <td>
                        <Link to="/dashboard/{user/_id}">
                          {user.email}
                        </Link> 
                      </td>  
                      <td className="text-uppercase">
                        <Link>
                          {user.user_role}
                        </Link>
                      </td>
                      <td>
                        <Link>
                            <time>
                              <Moment format="D MMM YYYY" withTitle>
                                {user.createdAt}
                              </Moment>
                            </time>
                        </Link>
                      </td>
                  </tr>
                )
              })}
                </tbody>
            </Table>

          </div>
        </div>
    </div>
    )
}

export default Dashboard;