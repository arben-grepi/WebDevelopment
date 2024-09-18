import { useCallback, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export const useDictionary = () => {
  const [wordInEnglish, setWordInEnglish] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Endpoint
  const endPoint = "/sanakirja/";

  const getWord = useCallback(
    async (sanaSuomeksi: string) => {
      const controller = new AbortController();

      try {
        const response = await apiClient.get<string>(
          `${endPoint}${sanaSuomeksi}`,
          { signal: controller.signal }
        );
        setWordInEnglish(response.data);
      } catch (err) {
        if (err instanceof CanceledError) return; // Handle request cancellation
        setError(err.message); // Handle other errors
      } finally {
        controller.abort(); // Ensure the controller is aborted after the request is complete
      }
    },
    [] // Include endPoint if it could change dynamically
  );

  const postWords = useCallback(
    async (wordData: { suomi: string; englanti: string }) => {
      try {
        const response = await apiClient.post<{ message: string }>(
          endPoint,
          wordData
        );
        return response.data.message;
      } catch (err) {
        if (err instanceof CanceledError) return; // Handle request cancellation
        setError(err.message); // Handle other errors
        throw err; // Re-throw error to be handled by the caller if necessary
      }
    },
    [] // Include endPoint if it could change dynamically
  );

  return { wordInEnglish, error, getWord, postWords };
};
