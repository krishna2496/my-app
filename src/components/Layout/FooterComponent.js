import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Container,
  List,
  ListInlineItem,
} from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container footer">
        <div className="row">
          <ul class="headerNav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
