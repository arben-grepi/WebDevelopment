const { Pay } = require("../models/pay");

async function getPays() {
  return await Pay.find();
}
async function getPaysWithID(id) {
  return await Pay.find({ _id: id });
}
async function getPaysWithCategory(categ) {
  return await Pay.find({ category: categ });
}

async function run() {
  // const pays = await getPays();
  // console.log(pays);
  // const pay = await getPaysWithID("668a966f359847f68ff127c0");
  // console.log(pay);
  // const pays = await getPaysWithCategory("store");
  // console.log(pays);
}
run();

module.exports = {
  getPays,
  getPaysWithID,
  getPaysWithCategory,
};
