const text = '{ "name": "John", "birth": "1994-12-4", "city": "NewYork"}'; //json muodossa
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    console.log(new Date(value));
  } else console.log(value);
});
