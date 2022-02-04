import React, { Component } from 'react';
import {  Navbar, NavItem, Button } from 'reactstrap';
import LoginButton from './login-button';


function openNav() {
    document.getElementById("sidebarNavigation").style.width = "200px";
    document.getElementById("main").style.paddingLeft = "220px";
    document.getElementById("navbar").style.marginLeft = "200px";
    //document.getElementById("openNav").style.visibility = "hidden";
  }

  function closeNav() {
    document.getElementById("sidebarNavigation").style.width = "0";
    document.getElementById("main").style.paddingLeft = "20px";
    document.getElementById("navbar").style.marginLeft = "0";
    //document.getElementById("openNav").style.visibility = "visible";

}

function toggleNav(){
    var navSize = document.getElementById("sidebarNavigation").style.width;
    if (navSize === "200px") {
        return closeNav();
    }
    return openNav();
}


class Header extends Component {
    render(){
        return(
            //Top Navigation Bar
            <Navbar id="navbar">
                <div className="header-items">
                <button id="sideShow" className="header-item-show btn btn-primary btn-block" onClick={() => toggleNav()}>X</button>
                <LoginButton />
                </div>
            </Navbar>
        );
    }
}


export default Header;