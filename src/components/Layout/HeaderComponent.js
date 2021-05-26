import React, { Component, useState } from "react";
import { Navbar, NavbarBrand, Jumbotron, Container } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" dark expand="md" fixed="top">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
          <ul class="headerNav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>

            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </Navbar>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Restaurant</h1>
            <p className="lead">
              We take inspiration from worls's best cuisine
            </p>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
