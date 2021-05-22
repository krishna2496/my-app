import React, { Component, useState } from "react";
import { Navbar, NavbarBrand, Jumbotron, Container } from "reactstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">Restaurant</NavbarBrand>
      </Navbar>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Restaurant</h1>
          <p className="lead">We take inspiration from worls's best cuisine</p>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Header;
