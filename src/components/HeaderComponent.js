import React from 'react';
import {  Navbar} from 'reactstrap';
import AuthNav from './auth-nav';

 function openNav() {
    document.getElementById("sidebarNavigation").style.width = "200px";
    document.getElementById("main").style.paddingLeft = "220px";
  } 

function toggleNav(){
    return openNav();
}


const Header = () => {
        return(
            //Top Navigation Bar
            <Navbar id="navbar" className="navbar">
                <div className="closeButton">
                <span id="sideshow2" style={{color: 'white'}} onClick={() => toggleNav()}>=</span>
                </div>
                <div className="header-items">
                <AuthNav />
                </div>
            </Navbar>
        );
}


export default Header;