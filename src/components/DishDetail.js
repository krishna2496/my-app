//class based component

import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

class DishDetail extends Component {
  render() {
    return (
      <div>
        {!this.props.selectedDish ? (
          <Row>{this.props.selectedDish}</Row>
        ) : (
          <Row>
            <Col className="mt-5">
              <Card>
                <CardImg
                  top="200px"
                  width="200px"
                  height="100px"
                  src={this.props.selectedDish.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{this.props.selectedDish.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span>Price : </span>
                    <span>{this.props.selectedDish.price} </span>
                  </CardSubtitle>
                  <CardText>{this.props.selectedDish.description}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
export default DishDetail;
