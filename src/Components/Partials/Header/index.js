// Dependencies
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Collapse, NavbarToggler, Nav } from 'reactstrap';

// Assets
import './Header.scss';
import logo from './../../../Assets/images/logo.png';

class Header extends React.Component {
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
      <header className="Header">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark w-100">
              <AnchorLink className="navbar-brand mr-autok" href="#Banner" >
                <img src={logo} alt="logo"/>
              </AnchorLink>
              <NavbarToggler onClick={this.toggleNavbar} className="navbar-toggler" />
              <Collapse className="collapse navbar-collapse" id="navbarSupportedContent" isOpen={!this.state.collapsed}>
                <Nav navbar className="navbar-nav justify-content-end ml-auto">
                  <li className="nav-item">
                    <AnchorLink className="nav-link" offset='59' href="#content-1">Features</AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" offset='59' href="#content-2">About</AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" offset='59' href="#content-3">Pricing</AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" offset='59' href="#content-4">Reviews</AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink className="nav-link" offset='59' href="#content-5">Contact</AnchorLink>
                  </li>
                </Nav>
              </Collapse>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
