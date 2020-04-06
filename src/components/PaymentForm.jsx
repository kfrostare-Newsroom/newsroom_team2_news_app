import React from "react";
import { Form, Heading, Button, Box } from "grommet";
import axios from "axios";
import { useDispatch, connect } from "react-redux";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";

const PaymentForm = (props) => {
  const dispatch = useDispatch();
  const submitPayment = async (event) => {
    event.preventDefault();
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    let stripeResponse = await props.stripe.createToken();
    let token = stripeResponse.token.id;
    let paymentState = await axios.post(
      "/subscriptions",
      {
        stripeToken: token,
      },
      { headers: headers }
    );

    if (paymentState.data.status === "paid") {
      dispatch({
        type: "SUCCESS_MESSAGE",
        payload: {
          successMessage: "Congratulations you are now a subscriber!",
        },
      });
    }
  };
  return (
    <Box>
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
          color="#544C2F"
          margin="xsmall"
          label="Submit Payment"
          onClick={(event) => {
            submitPayment(event);
          }}
        />
      </Form>
      <Button
        color="#544C2F"
        label="Back"
        onClick={() =>
          dispatch({
            type: "HIDE_PAYMENT_FORM",
            payload: { showPaymentForm: false, showArticleList: true },
          })
        }
      ></Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(injectStripe(PaymentForm));
