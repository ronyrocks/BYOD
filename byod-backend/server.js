const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ronitsethi1316@gmail.com", // Your email address
    pass: "Avneen_2602",  // Your email password or an app-specific password
  },
});

app.post("/order", (req, res) => {
  const orderDetails = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "ronitsethi1316@gmail.com", // Recipient's email address
    subject: "New Order",
    text: `Order Details: ${JSON.stringify(orderDetails)}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email.");
    }
    res.status(200).send("Order placed successfully.");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
