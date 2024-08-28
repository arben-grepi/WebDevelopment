/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const add = () => {
    //Add
    setTags([...tags, "exciting"]);
  };
  const remove = () => {
    //Remove
    // This line updates the tags array by filtering out the tag with the value "happy".
    // It creates a new array that includes all tags except "happy"
    setTags(tags.filter((tag) => tag !== "happy"));
  };
  const update = () => {
    //update
    // Replaces the "happy" tag with "happiness" in the tags array.
    setTags(tags.map((tag) => (tag === "cheerful" ? "joiful" : tag)));
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <h2>{tags.join(", ")}</h2>
        <button onClick={add}>Add</button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h2>{tags.join(", ")}</h2>
        <button onClick={remove}>remove</button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h2>{tags.join(", ")}</h2>
        <button onClick={update}>update</button>
      </div>
    </div>
  );
}
export default App;
