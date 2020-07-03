import React from 'react';

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Col,
  Row,
  CardBody
} from 'reactstrap';

const Cart = ({ cartItem, buyNow, removeItem }) => {
  let amount = 0;

  cartItem.forEach((product) => {
    amount = parseFloat(amount) + parseFloat(product.productPrice);
  });

  return (
    <Container fluid>
      <h1 className='text-success text-center'><u>Your Cart</u></h1>
      <br />
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt="product"/>
              </Col>
              <Col className='text-center'>
                <div className='text-primary'>{item.productName}</div>
                <span>price: {item.productPrice}</span>
                <Button
                  color='danger'
                  onClick={() => {
                    removeItem(item);
                  }}
                >
                  Remove Item
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
        {cartItem.length > 0 ? (
          <Card className='text-center mt-3'>
            <CardHeader>Grand Total</CardHeader>
            <CardBody>
              Total Items: {cartItem.length} Price: {amount}
            </CardBody>
            <CardFooter>
              <Button color='success' onClick={buyNow}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <h3 className='text-center'>No items in cart</h3>
        )}
      </ListGroup>
    </Container>
  );
};

export default Cart;
