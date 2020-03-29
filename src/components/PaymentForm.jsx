import React from "react";
import { Form, Heading, Button } from "grommet";
import axios from "axios";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";

const PaymentForm = props => {
  const submitPayment = async (event) => {
    event.preventDefault();
    let stripeResponse = await props.stripe.createToken()
    let token = stripeResponse.token.id
    let paymentState = await axios.post("/subscriptions", {stripeToken: token})
    if (paymentState === "paid") {

    } 
    debugger;
  };
  return (
    <Form id="payment-form">
      <Heading textAlign="center" level="4">
        Payment Form
      </Heading>
      <label>Card number:</label>
      <CardNumberElement />
      <label>Expiry date:</label>
      <CardExpiryElement />
      <label>CVC:</label>
      <CardCVCElement />
      <Button
        margin="xsmall"
        label="Submit Payment"
        onClick={event => {
          submitPayment(event);
        }}
      />
    </Form>
  );
};

export default injectStripe(PaymentForm);
