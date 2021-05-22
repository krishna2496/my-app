import React, { Component, useState } from "react";
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
          <List type="inline">
            <ListInlineItem>Lorem ipsum</ListInlineItem>
            <ListInlineItem>Phasellus iaculis</ListInlineItem>
            <ListInlineItem>Nulla volutpat</ListInlineItem>
          </List>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
