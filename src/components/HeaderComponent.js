import React, { Component } from 'react';
import {  Navbar, NavItem, Button } from 'reactstrap';

function openNav() {
    document.getElementById("sidebarNavigation").style.width = "200px";
    document.getElementById("main").style.paddingLeft = "220px";
    document.getElementById("navbar").style.marginLeft = "200px";
    document.getElementById("openNav").style.visibility = "hidden";
  }
class Header extends Component {
    render(){
        return(
            //Top Navigation Bar
            <Navbar id="navbar">
                <div>
                    <NavItem id="openNav" className="openNav">
                    <a onClick={() => openNav()}>
                        Open Navigation Pane</a>
                    </NavItem>
                    <NavItem>
                    <ul className="navbar-custom">
                        <li>
                            <input id="inputText" type="text"></input>
                            <Button>Search</Button>
                        </li>
                    </ul>
                    </NavItem>
                </div>
            </Navbar>
        );
    }
}


export default Header;