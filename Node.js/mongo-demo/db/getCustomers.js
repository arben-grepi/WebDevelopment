const { Customer } = require("../models/customer.js");

async function getCustomers() {
  return await Customer.find().populate("pay", "contractName -_id");
}
async function getCustomerWithID(id) {
  return await Customer.find({ _id: id });
}
async function getCustomerwithPayID(id) {
  return await Customer.find({ pay: id });
}

async function run() {
  //   const customers = await getCustomers();
  //   console.log(customers);
  //   const customer = await getCustomerWithID("669d0525684c8fb5ba1be204");
  //   console.log(customer);
  // const cust = await getCustomerwithPayID("669d0525684c8fb5ba1be200");
  // console.log(cust);
}
// run();

module.exports = {
  getCustomers,
  getCustomerWithID,
  getCustomerwithPayID,
};
