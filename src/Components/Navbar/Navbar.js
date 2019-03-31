import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light bg="dark" expand="md">
          <NavbarBrand href="#" className="mr-auto brand">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="navigationBar">
              <NavItem className="navItem">
                <NavLink><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink><Link to="/match" style={{ textDecoration: 'none' }}>Matches</Link></NavLink>
              </NavItem>
              <NavItem className="navItem">
             <NavLink><Link to="/about" style={{ textDecoration: 'none' }}>Aboutme</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  