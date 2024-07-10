const express = require("express");
const router = express.Router();
const { Pay, validate } = require("../models/pay.js");

const {
  getPays,
  getPaysWithID,
  getPaysWithCategory,
} = require("../db/getPays");

// Middleware to parse JSON bodies
router.use(express.json());

//DEBUGGERS
const dbDebugger = require("debug")("app:db");
const reqBodyDebugger = require("debug")("app:reqBody");

router.get("/", async (req, res) => {
  reqBodyDebugger(JSON.stringify(req.body));

  try {
    const pays = await getPays();
    dbDebugger("Pays: " + pays);
    res.json(pays);
  } catch (err) {
    res.status(500).send("Internal Server Error: " + err.message);
  }
});

router.get("/:id", async (req, res) => {
  reqBodyDebugger(JSON.stringify(req.body));

  try {
    const pay = await getPaysWithID(req.params.id);
    dbDebugger("Pay: " + pay);
    res.json(pay);
  } catch (err) {
    res.status(500).send("Internal Server Error: " + err.message);
  }
});

router.get("/category/:category", async (req, res) => {
  reqBodyDebugger(JSON.stringify(req.body));

  try {
    const pays = await getPaysWithCategory(req.params.category);
    dbDebugger("Pays: " + pays);
    res.json(pays);
  } catch (err) {
    res.status(500).send("Internal Server Error: " + err.message);
  }
});

router.post("/", async (req, res) => {
  reqBodyDebugger(JSON.stringify(req.body));

  try {
    // Validate request body
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Create new pay object
    const newPay = new Pay({
      contractName: req.body.contractName,
      category: req.body.category,
      age: req.body.age,
      hourlyRate: req.body.hourlyRate,
      eveningBonus: req.body.eveningBonus,
      saturdayBonus: req.body.saturdayBonus,
      sundayBonus: req.body.sundayBonus,
      nightBonus: req.body.nightBonus,
    });

    // Save the new pay object
    const savedPay = await newPay.save();
    res.send(savedPay); // Respond with the saved pay object
  } catch (err) {
    console.error("Error creating pay:", err);
    res.status(500).send("Error creating pay"); // Respond with an error status and message
  }
});

router.put("/:id", async (req, res) => {
  reqBodyDebugger(JSON.stringify(req.body));

  if (!req.params.id) return res.status(404).send("ID not provided");

  try {
    // Retrieve pay object by ID using Mongoose
    const pay = await Pay.findById(req.params.id);

    if (!pay) return res.status(404).send("Pay not found");

    // Validate request body
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Update pay object properties
    pay.contractName = req.body.contractName;
    pay.category = req.body.category;
    pay.age = req.body.age;
    pay.hourlyRate = req.body.hourlyRate;
    pay.eveningBonus = req.body.eveningBonus;
    pay.saturdayBonus = req.body.saturdayBonus;
    pay.sundayBonus = req.body.sundayBonus;
    pay.nightBonus = req.body.nightBonus;

    // Save the updated pay object
    const updatedPay = await pay.save();
    res.send(updatedPay); // Respond with the updated pay object
  } catch (err) {
    console.error("Error updating pay:", err);
    res.status(500).send("Error updating pay"); // Respond with an error status and message
  }
});

router.delete("/:id", async (req, res) => {
  reqBodyDebugger(JSON.stringify(req.body));
  if (!req.params.id) return res.status(404).send("ID not provided");
  try {
    // Retrieve pay object by ID using Mongoose
    const pay = await Pay.findById(req.params.id);

    if (!pay) return res.status(404).send("Pay not found");

    // Delete the pay object
    const result = await pay.deleteOne();

    if (result.deletedCount === 1) {
      res.send("Pay deleted successfully");
    } else {
      res.status(404).send("Pay not found");
    }
  } catch (err) {
    console.error("Error deleting pay:", err);
    res.status(500).send("Error deleting pay");
  }
});

module.exports = router;
