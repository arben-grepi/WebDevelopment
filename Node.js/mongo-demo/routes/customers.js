const express = require("express");
const router = express.Router();
const { Customer, validateCustomer } = require("../models/customer.js");

const {
  getCustomers,
  getCustomerWithID,
  getCustomerwithPayID,
} = require("../db/getCustomers.js");

// Middleware to parse JSON bodies
router.use(express.json());

//DEBUGGERS
const debugCustomer = require("debug")("app:customer");

router.get("/", async (req, res) => {
  try {
    const customer = await getCustomers();
    debugCustomer("Customer: " + customer);
    res.json(customer);
  } catch (err) {
    res.status(500).send("Internal Server Error: " + err.message);
  }
});

module.exports = router;
