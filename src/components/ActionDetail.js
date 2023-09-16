import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { fetchActionDetails } from '../api/tradeHarborApi';
import { buyAction, checkIfActionExistsInPortfolio, sellAction, getUserFunds, getPortfolio } from '../api/portfolioApi';

const ActionDetail = () => {
  const { symbol } = 'use-correct-method-here';
  const navigate = useNavigate();
  const [action, setAction] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentQuantity, setCurrentQuantity] = useState(0); // State to hold the current quantity in the portfolio
  const [canBuy, setCanBuy] = useState(true);
  const [canSell, setCanSell] = useState(false);
  const [buySuccess, setBuySuccess] = useState(false);
  const [sellSuccess, setSellSuccess] = useState(false);
  const [userFunds, setUserFunds] = useState(0);

  useEffect(() => {
   //add code here
  }, [symbol]);

  useEffect(() => {
    //fetch detail
  }, [symbol]);

  useEffect(() => {
  //
  }, [action]);

  useEffect(() => {
    // Calculate the total cost of buying the action
    if (action) {
      const totalCost = quantity * action.price;
     //code here
    }
  }, [quantity, action, userFunds]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleBuy = () => {
    buyAction(symbol, quantity, action.price)
      .then(() => {
        setBuySuccess(true);
        // should Update the current quantity here 

        
        setTimeout(() => {
          setBuySuccess(false);
          navigate('/'); // Redirect to the home page after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error('Error buying shares:', error);
      });
  };

  const handleSell = () => {
    sellAction(symbol, quantity, action.price)
      .then(() => {
        setSellSuccess(true);
        // should Update the current quantity here


        setTimeout(() => {
          setSellSuccess(false);
          navigate('/'); // Redirect to the home page after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error('Error selling shares:', error);
      });
  };

  if (!action) {
    return <div>Loading...</div>;
  }

  return (
    <div className="action-detail">
      <Card>
        <Card.Body>
          <Card.Title>{action.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Symbol: {action.symbol}</Card.Subtitle>
          <Card.Text>
            Price: ${action.price.toFixed(2)}
            <br />
            Description: {action.description}
            <br />
            Analysis: {action.analysis}
          </Card.Text>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </Form.Group>
          <p>Current Quantity in Portfolio: {currentQuantity}</p>
          <Button
            variant="success"
            className="mr-2"
            onClick={handleBuy}
            disabled={!canBuy}
          >
            Buy
          </Button>
          <Button
            variant="danger"
            onClick={handleSell}
            disabled={!canSell}
          >
            Sell
          </Button>
          {buySuccess && (
            <Alert variant="success" className="mt-3">
              Buy successful. Redirecting to the home page...
            </Alert>
          )}
          {sellSuccess && (
            <Alert variant="success" className="mt-3">
              Sell successful. Redirecting to the home page...
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ActionDetail;
