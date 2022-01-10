import React, { Component } from 'react';
import VerticleBar from './VerticleBarComponent';
import DoughnutChart from './DoughnutComponent';
import { Card, CardHeader, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

/** 
function assets(props) {
    const ifExist = props.assetData;
    if (ifExist === null) {
        return '0';
    } else {
        return props.assetData.length;
    }
}

*/
    var arrayFromStorage = JSON.parse(localStorage.getItem("test1"));
    if(arrayFromStorage != null){
    var arrayLength = arrayFromStorage.length;
    }else{
    arrayLength = '0'
    }

function Dashboard(props) {


    return (
        //Body
        <main className="main" id="main">
            <div className="body-header">
                <div>
                    <div>
                        <p>THIS IS A PRE-RELEASE DEMO. Some functionality has not been implemented yet.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-md-8">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="card">
                        <div className="card-body bg-teal">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="statistics">
                                    <h6 className="text-uppercase">Total Assets</h6>
                                    <h2></h2>
                                    <p>Overall count of assets </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div class="statistics">
                                        <h6 class="text-uppercase">Total Licenses</h6>
                                        <h2>1,400</h2>
                                        <p>Overall count of assets are 1,400</p>
                                    </div>
                                
                                </div>
                                <div className="col-md-3">
                                    <div class="statistics">
                                        <h6 class="text-uppercase">Total Accessories</h6>
                                        <h2>1,400 </h2>
                                        <p>Overall count of assets are 1,400</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                        <div class="statistics">
                                            <h6 class="text-uppercase">Total Consumables</h6>
                                            <h2>1,400</h2>
                                            <p>Overall count of assets are 1,400</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <section>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-teal">
                                <h5>Main Information</h5>
                            </div>
                            <div class="card-body bg-teal">
                                <h4>Placeholder Information</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-teal">
                                <h5>Main information 2</h5>
                            </div>
                            <div class="card-body bg-teal">
                                <h4>Placeholder Informaiton</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-teal">
                                <h5>Main information 3</h5>
                            </div>
                            <div class="card-body bg-teal">
                                <h4>Placeholder Information</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="card">
                <section className="main-table" styles="background-color: rgb(255, 255, 255);">
                    <div class="box-header">
                        <h2 class="box-title">Recent Activity</h2>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover table-centered mb-0">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">User</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>10/11/11</td>
                                    <td>update</td>
                                    <td>Keyboard</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="Card-Header">
                            <div>
                                <h5 class="card-category">Overall assets</h5>
                            </div>
                            <div className="card-title">
                                <h2>{arrayLength}</h2>
                            </div>
                            <div className="dropdown">
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                                <VerticleBar />
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="Card-Header">
                            <div>
                                <h5 class="card-category">Overall assets</h5>
                            </div>
                            <div className="dropdown">
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                                <DoughnutChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="Card-Header">
                            <div>
                                <h5 class="card-category">Overall assets</h5>
                            </div>
                            <div className="card-title">
                                <h2>1,000</h2>
                            </div>
                            <div className="dropdown">
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                                <VerticleBar />
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                    <tr>
                                        <td>Laptop</td>
                                        <td className="text-right">20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            



        </main>



    );
}

export default Dashboard;
