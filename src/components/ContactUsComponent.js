import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

// function ContactUs(props) {
//   return (
//     <div className="container">
//       {/* contact us form */}
//       <div className="row">
//         <div className="col-md-12">
//           <h1>Send Us</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event) {
    const targetV = event.target;
    const value = targetV.value;
    const name = targetV.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    //alert("form" + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={this.state.firstName}
                  onChange={this.handleFormChange}
                  placeholder="first Name"
                />
              </FormGroup>
            </div>

            <div className="col-md-12">
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={this.state.lastName}
                  onChange={this.handleFormChange}
                  placeholder="lastName placeholder"
                />
              </FormGroup>
            </div>
          </div>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default ContactUs;
