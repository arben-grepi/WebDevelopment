const { required } = require("joi");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    // author: authorSchema,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId, name) {
  try {
    const result = await Course.updateOne(
      { _id: courseId },
      {
        $set: {
          "author.name": name,
        },
      }
    );
    console.log("Update Result:", result);
  } catch (error) {
    console.error("Error updating author:", error);
  }
}

async function updateAuthorName(courseId, authorId, newName) {
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      console.error("Course not found");
      return;
    }

    const author = course.authors.id(authorId);
    if (!author) {
      console.error("Author not found");
      return;
    }

    // Update the author's name
    author.name = newName;

    // Save the updated course document
    await course.save();

    console.log("Author name updated successfully");
  } catch (error) {
    console.error("Error updating author name:", error);
  }
}

async function removeAuthor(courseId, authorId) {
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      console.error("Course not found");
      return;
    }

    // Pull the author from the authors array
    course.authors.pull({ _id: authorId });
    await course.save(); // Save the changes to the database

    console.log("Author removed successfully");
  } catch (error) {
    console.error("Error removing author:", error);
  }
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  const result = await course.save();
  console.log("Result: " + result);
}

// createCourse("Node Course", [
//   new Author({ name: "Mosh" }),
//   new Author({ name: "Jhon" }),
// ]);

// updateAuthor("669bda958130557a6a30787a", "Jhon Smith");
listCourses();

// addAuthor("669bda958130557a6a30787a", new Author({ name: "Amy" }));

// removeAuthor("669bda958130557a6a30787a", "669bdde18c6b962306977633");
updateAuthorName(
  "669bda958130557a6a30787a",
  "669bda958130557a6a307878",
  "John Doe"
);
