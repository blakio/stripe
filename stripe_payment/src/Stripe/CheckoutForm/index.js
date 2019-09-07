
import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const CheckoutForm = (props) => {

  const submit = async (ev) => {
    const { token } = await props.stripe.createToken({ name: "Name" });
    const response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        amount: 1550,
        currency: "usd",
        description: "some product description",
        source: token.id,
        metadata: {hey: "blakio"}
      })
    });

    if (response.ok) console.log("Purchase Complete!")
  }

  return (
    <div style={styles.checkout}>
      <CardElement />
      <button
        style={styles.button}
        onClick={submit}>Send</button>
    </div>
  );
}

const styles = {
  checkout: {
    width: 400
  },
  button: {
    backgroundColor: "#C96868",
    color: "#fff",
    border: "none",
    fontSize: 16,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 2,
    letterSpacing: 5
  }
}

export default injectStripe(CheckoutForm);
