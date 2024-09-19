import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { schema, FormData } from "./FormAddWordVal";
import { useDictionary } from "../hooks/useSanakirja";

const Form = () => {
  const { postWords } = useDictionary();
  const [responseMessage, setResponseMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: joiResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      // Post the data using postWords method
      const message = await postWords({
        suomi: data.suomeksi,
        englanti: data.englanniksi,
      });

      // Set response message to display
      if (message) setResponseMessage(message);

      // Wait 1 second, then reset inputs and clear the message
      setTimeout(() => {
        reset(); // Reset the form inputs
        setResponseMessage(""); // Clear the response message
      }, 1000); // 1000 milliseconds = 1 second
    } catch (err) {
      console.error("Failed to post word:", err);
      setResponseMessage("Failed to add word.");
    }
  };

  return (
    <div>
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

      {/* Display the response message */}
      {responseMessage && (
        <div className="mt-3">
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
