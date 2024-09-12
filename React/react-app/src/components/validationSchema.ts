import Joi from "joi";
import { FieldValues } from "react-hook-form";

// Create the Joi schema
const schema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.min": "Name must be at least 3 characters long",
    "string.empty": "Name is required",
  }),
  age: Joi.number().min(18).required().messages({
    "number.base": "Age must be a number",
    "number.min": "Age must be at least 18",
    "number.empty": "Age is required",
  }),
});

// Custom resolver for Joi
export const joiResolver =
  (schema: Joi.ObjectSchema) => (data: FieldValues) => {
    const { error, value } = schema.validate(data, { abortEarly: false });

    if (!error) {
      return {
        values: value,
        errors: {},
      };
    }

    const errors = error.details.reduce((acc: any, currentError) => {
      return {
        ...acc,
        [currentError.path[0]]: {
          type: currentError.type,
          message: currentError.message,
        },
      };
    }, {});

    return {
      values: {},
      errors,
    };
  };

export default schema;
