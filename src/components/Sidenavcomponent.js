import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function closeNav() {
    document.getElementById("sidebarNavigation").style.width = "0";
    document.getElementById("main").style.paddingLeft = "20px";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("openNav").style.visibility = "visible";

}

class Sidenav extends Component {
    
    render(){
        return (
        <div className="page-wrapper">
            <div className="sidebar" id="sidebarNavigation">
                <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>&times;</a>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-12">AMI</span>
                </a>
                <hr></hr>
                <NavLink className="nav-link" to="/dashboard">
                    <i className="fa fa-fw fa-home" />Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/assetentry">
                        <i className="fa fa-fw fa-wrench" /> AssetEntry
                </NavLink>
                <NavLink className="nav-link" to="/inventory">
                        <i className="fa fa-fw fa-user"></i> Inventory
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                    <i className="fa fa-fw fa-envelope"></i> Contact
                </NavLink>
                <a href="#">Cloud Resources</a>
                <a href="#">Licenses</a>
                <a href="#">Accesories</a>
                <a href="#">Components</a>
                <a href="#">People</a>
                <a href="#">Admin page</a>
                <a href="#">Reports</a>
            </div>
        </div>
        );
    }

}


export default Sidenav;