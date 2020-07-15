import React from 'react';
import {Table } from 'react-bootstrap';

import Header from '../Header';

const Dashboard = ()=>{
	 const header = ["S/NO", "Item", "Item", "Item", "Item"];
	return(
		<div className="container">
			<Header />
			<div className="card w-100 mt-3">
			<h3 className="text-center text-uppercase pt-5">Dashboard</h3>
                <div className="card-header d-flex justify-content-between">
                  <div className="d-flex align-items-center justify-content-between">
                    <img src="" className="mw-100"/>
                    <h5 className="card-heading ml-3">
                     	Users
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <Table>
                      <thead striped bordered hover>
                          <tr>{header.map((h) => <th className="card-heading">{h}</th>)}</tr>
                      </thead>
                      <tbody>

                      {
                       <tr>
                            <td>Test</td>
                             <td>Test</td>
                             <td>Test</td>
                             <td>Test</td>
                            <td>Test</td>
                        </tr>
                      }

                      </tbody>
                  </Table>
     
                </div>
              </div>
		</div>
		)
}

export default Dashboard;