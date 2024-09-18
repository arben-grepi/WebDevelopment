import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type FormData = {
  name: string;
  age: number;
};

const Form = () => {
  const {
    register, // The `register` function is used to register each input field in the form
    handleSubmit, // The `handleSubmit` function is called when the form is submitted, handling validation and form submission
    formState: { errors, isValid }, // Destructure `errors` and `isValid` from formState
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 col-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3 col-2">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
