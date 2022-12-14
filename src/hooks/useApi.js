import { useEffect, useState } from "react";
import { api } from "../api";

export function useApi(url, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const isNotAborted = () => !signal.aborted;

    const doFetch = async () => {
      // istanbul ignore else
      if (isNotAborted()) setLoading(true);

      try {
        const { data } = await api.get(url, options);

        // istanbul ignore else
        if (isNotAborted()) {
          setResponse(data);
        }
      } catch (err) {
        // istanbul ignore else
        if (isNotAborted()) {
          setError(err);
        }
      } finally {
        // istanbul ignore else
        if (isNotAborted()) {
          setLoading(false);
        }
      }
    };

    doFetch();

    // Event when is component destroy!!!
    return () => {
      abortController.abort();
    };
  }, []);

  return { response, error, loading };
}