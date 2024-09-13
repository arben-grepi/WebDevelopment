import Joi from "joi"; // Import Joi for schema validation
import { FieldValues } from "react-hook-form"; // Import FieldValues for type safety in react-hook-form

// Define the type for an individual validation error
// This interface describes the shape of each error message that Joi will return
interface ValidationError {
  type: string; // The type of validation error (e.g., "string.min" or "number.base")
  message: string; // The human-readable error message to display to the user
}

// Define the type for the overall errors object
// This object maps field names (e.g., 'name', 'age') to their respective validation errors
interface Errors {
  [key: string]: ValidationError; // Keys represent form field names, and values are ValidationError objects
}

// Create the Joi schema that defines validation rules for the form fields
// Here, we define the rules for 'name' and 'age' fields
const schema = Joi.object({
  // Define 'name' as a required string with a minimum length of 3 characters
  name: Joi.string().min(3).required().messages({
    "string.min": "Name must be at least 3 characters long", // Custom message for 'string.min' error
    "string.empty": "Name is required", // Custom message when the 'name' field is empty
  }),
  // Define 'age' as a required number with a minimum value of 18
  age: Joi.number().min(18).required().messages({
    "number.base": "Age must be a number", // Custom message if the value isn't a number
    "number.min": "Age must be at least 18", // Custom message for when the age is below 18
    "number.empty": "Age is required", // Custom message for an empty 'age' field
  }),
});

// Custom resolver function for Joi to work with react-hook-form's validation system
// It takes in a Joi schema and returns a function compatible with react-hook-form's validation flow
export const joiResolver =
  (schema: Joi.ObjectSchema) => (data: FieldValues) => {
    // Validate the data (form input) against the provided Joi schema
    // { abortEarly: false } means that Joi will collect all errors, not just the first one
    const { error, value } = schema.validate(data, { abortEarly: false });

    // If there are no errors from the Joi validation, return the validated values and an empty errors object
    if (!error) {
      return {
        values: value, // Validated and sanitized form values are returned here
        errors: {}, // No errors since validation passed
      };
    }

    // If there are validation errors, transform the Joi error details into a format
    // that react-hook-form understands. Joi provides an array of errors in `error.details`.
    // We use reduce to build an object mapping field names to error messages and types.
    const errors = error.details.reduce((acc: Errors, currentError) => {
      // For each validation error, map the field name to the ValidationError object
      return {
        ...acc, // Preserve previous errors in the accumulator object (acc)
        [currentError.path[0]]: {
          type: currentError.type, // The type of the error (e.g., "string.min", "number.base")
          message: currentError.message, // The custom error message generated by Joi
        },
      };
    }, {} as Errors); // Cast the initial accumulator value as an empty Errors object

    // Return the errors object and an empty values object because the data was invalid
    return {
      values: {}, // Since there are validation errors, no valid values are returned
      errors, // The constructed errors object containing field-specific validation errors
    };
  };

export default schema; // Export the schema as the default export so it can be used in other parts of the application
