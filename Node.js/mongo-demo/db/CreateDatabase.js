const { Pay, validate } = require("../models/pay");

const storePay = new Pay({
  contractName: "Store Contract",
  category: "store",
  age: "3-6",
  hourlyRate: 15,
  eveningBonus: {
    amount: 2,
    start: "18:00",
    finish: "00:00",
  },
  saturdayBonus: {
    amount: 3,
    start: "13:00",
    finish: "00:00",
  },
  sundayBonus: {
    amount: 15,
    start: "00:00",
    finish: "00:00",
  },
  nightBonus: {
    amount: 2.5,
    start: "00:00",
    finish: "06:00",
  },
});

const restaurantPay = new Pay({
  contractName: "Restaurant Contract", //
  category: "restaurant",
  age: "0-2",
  hourlyRate: 11.5,
  eveningBonus: {
    amount: 2,
    start: "18:00",
    finish: "00:00",
  },
  saturdayBonus: {
    amount: 3,
    start: "13:00",
    finish: "00:00",
  },
  sundayBonus: {
    amount: 11.5,
    start: "00:00",
    finish: "00:00",
  },
  nightBonus: {
    amount: 2.5,
    start: "00:00",
    finish: "06:00",
  },
});

// Function to validate and save a document
async function validateAndSave(payObject) {
  try {
    // Convert the Mongoose object to a plain JavaScript object
    const payObjectData = payObject.toObject();
    console.log(payObject);

    // Validate the pay object
    const { error } = await validate(payObjectData);
    if (error) {
      console.error("Validation error:", error.details[0].message);
      return;
    }

    // Save the validated pay object to the database
    const savedDoc = await payObject.save();
    console.log("Document saved:", savedDoc);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Validate and save restaurantPay
validateAndSave(restaurantPay);

// Validate and save storePay
validateAndSave(storePay);
