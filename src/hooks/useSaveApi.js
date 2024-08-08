import { useState } from 'react';

export const useApi = (endpoint, method) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const fetchData = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setResponse(result);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, fetchData };
};


