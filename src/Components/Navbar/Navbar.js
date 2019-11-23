import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Navbar.css';
import logo from './../../Assets/brand.svg'
import { Link } from 'react-router-dom';


export default class NavigationBar extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    console.log("previous page offser", window.pageYOffset);
    let previuosScrollValue = 0;
    window.onscroll = () => {
      if (previuosScrollValue < window.pageYOffset) {
        document.querySelector(".navbar").style.top = "-100px"
      } else {
        document.querySelector(".navbar").style.top = "0px";
      }
      previuosScrollValue = window.pageYOffset;
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <img src={logo} alt="logo" className="brandLogo"/>
          <NavbarBrand href="/" className="mr-auto brand">BarcaLoverz</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="navigationBar">
              <NavItem className="navItem">
               <Link to="/" onClick={this.toggleNavbar} style={{ textDecoration: 'none' }}>Home</Link>
              </NavItem>
              <NavItem className="navItem">
                <Link to="/matches" onClick={this.toggleNavbar} style={{ textDecoration: 'none' }}>Matches</Link>
              </NavItem>
              <NavItem className="navItem">
             <Link to="/about" onClick={this.toggleNavbar} style={{ textDecoration: 'none' }}>Aboutme</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  