import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.svg';
import './App.css';
import BuyPage from './components/BuyPage';
import Cart from './components/Cart';

import { Container, Row, Col } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    //verify if already in cart
    const isItemAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isItemAlreadyAdded !== -1) {
      toast('already added in cart', {
        type: 'error'
      });
    } else {
      toast('Product added in cart', {
        type: 'success'
      });
      setCartItem([...cartItem, item]);
    }
  };

  const buyNow = () => {
    setCartItem([]);
    toast('Purchase Complete', { type: 'success' });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((itemval) => itemval.id !== item.id));
  };

  return (
    <Container fluid className='body'>
      <ToastContainer />
      <Row>
        <Col md='8'>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md='4'>
          <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
