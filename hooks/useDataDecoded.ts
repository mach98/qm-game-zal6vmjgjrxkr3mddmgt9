import { useEffect, useState } from 'react';
import axios from 'axios';

interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

interface DataObject {
  response_code: number;
  results: Question[];
}

const useDecodedData = (url: string) => {
  const [data, setData] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const decodeObjectValues = (obj: Question): Question => {
    return {
      ...obj,
      question: decodeURIComponent(obj.question),
      correct_answer: decodeURIComponent(obj.correct_answer),
      incorrect_answers: obj.incorrect_answers.map((ans) =>
        decodeURIComponent(ans)
      ),
    };
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<DataObject>(url);
        // console.log('API response:', response.data);

        if (response.data && Array.isArray(response.data.results)) {
          const decodedData = response.data.results.map(decodeObjectValues);
          //  console.log('Decoded data:', decodedData);
          if (isMounted) setData(decodedData);
        } else {
          throw new Error('API response does not contain results array');
        }
      } catch (err) {
        //  console.error('API call error:', err);
        if (isMounted) setError(err as Error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useDecodedData;
