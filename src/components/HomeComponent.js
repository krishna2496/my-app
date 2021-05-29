import React from "react";
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
import { PROMOTIONS } from "../shared/promotion";
import { LEADERS } from "../shared/leaders";

function RenderCard({ dishes }) {
  return (
    <Col xs="12" sm="6" md="4" lg="4" className="mt-4">
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

function Home(props) {
  return (
    <div className="container">
      <h4>Home</h4>
      <div className="row">
        <RenderCard dishes={PROMOTIONS} />
      </div>

      <div className="row">
        <RenderCard dishes={PROMOTIONS} />
      </div>
    </div>
  );
}

export default Home;
