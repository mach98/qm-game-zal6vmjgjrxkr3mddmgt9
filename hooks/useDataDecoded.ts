import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataObject {
  response_code: number;
  results: {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }[];
}
const useDataDecoded = (url: string) => {
  const [data, setData] = useState<DataObject['results'] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log('API response:', response.data); // Log the response
      } catch (err) {
        console.error('API call error:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useDataDecoded;
