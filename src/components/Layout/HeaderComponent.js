import React, { Component, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(event) {
    // this.toggleModal();
    alert(this.email.value);
    event.preventDefault();
  }

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
            <li>
              <Link to="/sing-up">SignUp</Link>
            </li>
            <li>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
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
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="with a placeholder"
                  innerRef={(Input) => (this.email = Input)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password placeholder"
                  innerRef={(Input) => (this.password = Input)}
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Header;
