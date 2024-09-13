import { FieldValues, useForm } from "react-hook-form";
import schemaForFormReactHookJoi, { joiResolver } from "../validationSchema"; // Import schema and resolver

type FormData = {
  name: string;
  age: number;
};

const Form = () => {
  const {
    register, // The `register` function is used to register each input field in the form
    handleSubmit, // The `handleSubmit` function is called when the form is submitted, handling validation and form submission
    formState: { errors, isValid }, // Destructure `errors` and `isValid` from formState
  } = useForm<FormData>({
    // Pass in a generic type (FormData) to `useForm` to define the shape of the form data
    // This ensures type safety, making sure that TypeScript can infer correct types for the form fields

    resolver: joiResolver(schemaForFormReactHookJoi),
    // The `resolver` key specifies the validation strategy.
    // Here, `joiResolver` is being used, which is a custom resolver that validates the form using Joi.
    // `schemaForFormReactHookJoi` is the Joi validation schema passed to the resolver.
    // This connects Joi validation with react-hook-form, allowing Joi to handle the validation logic.

    mode: "onChange",
    // The `mode` option specifies when validation occurs.
    // "onChange" means that validation will be triggered every time an input value changes.
    // This ensures real-time feedback to the user as they are typing or selecting values.
  });

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
