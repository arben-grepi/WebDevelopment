import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { schema, FormData } from "./FormValidation";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: joiResolver(schema),
    mode: "onChange", // Ensures `isValid` is updated as you type
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-100">
      <div className="mb-3">
        <label htmlFor="suomeksi" className="form-label">
          Suomeksi
        </label>
        <input
          {...register("suomeksi")}
          id="suomeksi"
          type="text"
          className="form-control"
          style={{ width: "200px" }}
        />
        {errors.suomeksi && (
          <p className="text-danger">{errors.suomeksi.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="englanniksi" className="form-label">
          Englanniksi
        </label>
        <input
          {...register("englanniksi")}
          id="englanniksi"
          type="text"
          className="form-control"
          style={{ width: "200px" }}
        />
        {errors.englanniksi && (
          <p className="text-danger">{errors.englanniksi.message}</p>
        )}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
