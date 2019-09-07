import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm/index.js';
import Form from './Form/index.js';

const Stripe = () => {

  const formData = [
    { label: "First Name", width: "half", type: "input" },
    { label: "Last Name",  width: "half", type: "input" },
    { label: "City",       width: "full", type: "input" },
    { label: "State",      width: "half", type: "input" },
    { label: "Zipcode",    width: "half", type: "input" }
  ]

  return (
    <StripeProvider apiKey="pk_test_oR7Sg0jQqdn7kmf4vwilfDE300mIMudRry">
      <div style={styles.payment_box}>
        <div style={styles.formHolder}>
          <Form formData={formData}/>
          <p style={styles.title}>Payment</p>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </StripeProvider>
  );
}

const styles = {
  payment_box: {
    color: "#C96868",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  formHolder: {
    backgroundColor: "#f8f8f8",
    width: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
    borderRadius: 4
  },
  title: {
    fontSize: 20
  }
}

export default Stripe;
