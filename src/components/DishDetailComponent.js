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

function RenderDish({ dishes }) {
  return (
    <Col xs="12" sm="6" md="4" lg="4" className="mt-3">
      <Card>
        <CardImg
          top="200px"
          width="200px"
          height="100px"
          src={dishes.image}
          alt="Card image cap"
        />

        <CardBody>
          <CardTitle tag="h5">{dishes.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <span>Price : </span>
            <span>{dishes.price} </span>
          </CardSubtitle>
          <CardText>{dishes.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

const DishDetailComponent = (props) => {
  return (
    <div class="container">
      <h1>Dish Detail</h1>
      <div className="row">
        <RenderDish dishes={props.dish} />
      </div>
    </div>
  );
};

export default DishDetailComponent;
