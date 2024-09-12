import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 col-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3 col-2">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          //we add this to get controlled commponenets. The value is not determined by dom, but it is determined in the compnent state
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
