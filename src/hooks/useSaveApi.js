import { useState } from 'react';

export const useApi = (endpoint, method) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const fetchData = async (data, setOpenModal) => {
    setLoading(true);
    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(data),
      });
      if (response.ok) { 
        const result = await response.json();
        setResponse(result);
        setError(null);
        setOpenModal(true);
      } else {
        const errorData = await response.json();
        console.error('Error sending data to the backend', errorData);
        setError(errorData);
        setOpenModal(false);
      }
    } catch (error) {
      console.error('Error sending data to the backend', error);
      setError(error);
      setOpenModal(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, fetchData };
};
