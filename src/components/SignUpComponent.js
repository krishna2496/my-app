import { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Button, Form } from "reactstrap";

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length > len;
//cost maxLength = (len) => (val) => val && (val.length < len);

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit(value) {
    console.log(JSON.stringify(value));
  }
  render() {
    return (
      <div className="container">
        <h1>SignUp</h1>
        <Form model="feedback" onSubmit={(values) => this.onSubmit(values)}>
          <div className="row mt-10">
            <div className="col-md-12">
              <Control.text
                model=".firstname"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                className="form-control"
                validators={{ required, minLength: minLength(3) }}
              />
              <Errors
                className="text-danger"
                model=".firstname"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 2 characters",
                  maxLength: "Must be 15 characters or less",
                }}
              />
            </div>
          </div>
          <div className="row  mt-10">
            <div className="col-md-12">
              <Control.text
                model=".lastname"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="row  mt-10">
            <div className="col-md-12">
              <Control.text
                model=".email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-10">
            <div className="col-md-12 ">
              <Button>SignUp</Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
