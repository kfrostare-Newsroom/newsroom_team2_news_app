import React from 'react';
import { Form, Heading } from "grommet";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements"


const PaymentForm = () => {

    return (  
      <Form id="payment-form">
        <Heading level="4">Payment Form</Heading>
        <label>Card number:</label>
        <CardNumberElement />
        <label>Expiry date:</label>
        <CardExpiryElement />
        <label>CVC:</label>
        <CardCVCElement />
      </Form>     
    )
}

     

export default injectStripe(PaymentForm);