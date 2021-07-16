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
import { Link } from "react-router-dom";
import Loader from "./Loader";

// class Menu extends Component {
//   render() {
//     // const selectedDish = this.state.selectedDish;
//     const dishArray = this.props.dish.map((dishes) => {
//       return (
//         <Col xs="12" sm="6" md="4" lg="4" className="mt-3">
//           <Card onClick={() => this.props.onClick(dishes.id)}>
//             <CardImg
//               top="200px"
//               width="200px"
//               height="100px"
//               src={dishes.image}
//               alt="Card image cap"
//             />
//             <CardBody>
//               <CardTitle tag="h5">{dishes.name}</CardTitle>
//               <CardSubtitle tag="h6" className="mb-2 text-muted">
//                 <span>Price : </span>
//                 <span>{dishes.price} </span>
//               </CardSubtitle>
//               <CardText>{dishes.description}</CardText>
//               <Button>Button</Button>
//             </CardBody>
//           </Card>
//         </Col>
//       );
//     });
//     return (
//       <Container>
//         <Row>{dishArray}</Row>
//       </Container>
//     );
//   }
// }

const Menu = (props) => {
  let dishArray = "";

  if (props.isLoading) {
    dishArray = (
      <div className="container">
        <div className="row">
          <Loader />
        </div>
      </div>
    );
  } else if (props.errMess) {
    dishArray = (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    dishArray = props.dish.map((dishes) => {
      return (
        <Col xs="12" sm="6" md="4" lg="4" className="mt-4">
          <Card>
            <Link to={`/dish-detail/${dishes.id}`}>
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
            </Link>
          </Card>
        </Col>
      );
    });
  }

  return (
    <Container>
      <div>
        <h4>Menu</h4>
      </div>
      <Row>{dishArray}</Row>
    </Container>
  );
};

export default Menu;
