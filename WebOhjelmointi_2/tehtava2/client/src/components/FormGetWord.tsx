import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { getWord } from "../hooks/useSanakirja";
import { AxiosError } from "axios";
import { schema, FormData } from "./FormGetWordVal";
import { joiResolver } from "@hookform/resolvers/joi";

export const FormGetWord = () => {
  const [word, setWord] = useState<string>("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: joiResolver(schema),
    mode: "onChange",
  });

  const sumbitForm = async (data: FieldValues) => {
    try {
      const value = await getWord(data.annaSana);
      if (value instanceof AxiosError) {
        setTimeout(() => {
          reset(); // Reset the form inputs
          setError(""); // Clear the response message
        }, 1000); // 1000 milliseconds = 1 second
        return setError(value.message);
      } else {
        setWord(value);
        setTimeout(() => {
          reset({ annaSana: "" }); // Reset the form inputs
          setError(""); // Clear the response message
        }, 1000); // 1000 milliseconds = 1 second
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sumbitForm)}>
        <h2 style={{ marginBottom: "40px" }}>Hae sana sanakirjasta</h2>
        <div className="d-flex justify-content-around">
          <div>
            <div className="mb-3">
              <label htmlFor="annaSana" className="form-label">
                Anna sana
              </label>
              <input
                {...register("annaSana")}
                id="annaSana"
                type="text"
                className="form-control"
                style={{ width: "200px" }}
              />
              {!isValid && (
                <p className="text-danger">{errors.annaSana?.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="annaSana" className="form-label">
                Sana englanniksi
              </label>
              <input
                value={word}
                id="sanaEnglanniksi"
                type="text"
                className="form-control"
                style={{ width: "200px" }}
                readOnly
                tabIndex={-1} // Prevent focus with Tab key
              />
            </div>
          </div>
          <button
            disabled={!isValid}
            style={{ height: "60px", marginTop: "20px" }}
            type="submit"
            className="btn btn-primary"
          >
            Käännä
          </button>
        </div>
      </form>
      {error && (
        <div className="mt-3 text-danger">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FormGetWord;
