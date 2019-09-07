const app = require("express")();
const stripe = require("stripe")("sk_test_Q6wI90zfTFIPVfUt3oH6ESAC00oZwnSFCm");

const {
  port
} = require("./config");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(port, console.log(`app listening on port ${port}`));
