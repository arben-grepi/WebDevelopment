const express = require("express");
const router = express.Router();

const Joi = require("joi");

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

//how to work with parameters

router.get("/:id", (req, res) => {
  //antaa parametrit objektin sisällä, jossa parametrit avainarvopareina.
  // etsii taulukosta ensimmäisen alkion, joka täyttää annetun testifunktion ehdot.
  // Se palauttaa kyseisen alkion tai undefined, jos sopivaa alkiota ei löydy
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send(`Kurssia ID:llä ${req.params.id} ei löytynyt.`);
  }
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send(`Kurssia ID:llä ${req.params.id} ei löytynyt.`);

  //Delete
  const index = courses.indexOf(course);
  //splice method goes to the index of a list and removes an x amount of objects, in this case 1-
  courses.splice(index, 1);
  res.send(course);
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    //in order for this line to workd, we need to enable parsing of the json object in the body
    //of the request. -> Added app.use(express.json())
    //express.json() is a built-in middleware function in Express. This middleware parses
    //incoming requests with JSON payloads and is based on the body-parser module.
    //It parses the JSON data and makes it available under the req.body property of the
    //request object. By using express.json(), you can easily access the data sent in the
    //request body. For example, in a POST request, you can directly use req.body to access
    // the parsed JSON data.
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put(`/:id`, (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send(`Kurssia ID:llä ${req.params.id} ei löytynyt.`);

  const { error } = validateCourse(req.body);
  if (error) returnres.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

module.exports = router;
