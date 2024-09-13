import { categories } from "./categories";
import { useForm } from "react-hook-form";
import schema, { joiResolver } from "../validationSchema"; // Import the custom Joi resolver and schema

type FormData = {
  description: string;
  amount: number;
  category: string;
};

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenceForm = ({ onSubmit }: Props) => {
  // Set up react-hook-form with the Joi resolver and validation schema
  const {
    register, // To register inputs with react-hook-form
    handleSubmit, // To handle form submission
    reset,
    formState: { errors, isValid }, // Extract form state including errors and validation status
  } = useForm<FormData>({
    resolver: joiResolver(schema), // Use the custom Joi resolver
    mode: "onChange", // Validate on change for live feedback
  });

  // // Handle form submission
  // const onSubmit = (data: FieldValues) => {
  //   console.log(data); // You can replace this with your submission logic
  // };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")} // Register the input with react-hook-form
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount")}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option value=""></option>
          {categories.map((c: string) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenceForm;
