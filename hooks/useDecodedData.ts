import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataObject {
  [key: string]: string | string[]; // Include string[] to handle arrays
}

const useDecodedData = (url: string) => {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const decodeObjectValues = (obj: DataObject): DataObject => {
    return Object.keys(obj).reduce((acc: DataObject, key: string) => {
      try {
        const value = obj[key];
        if (Array.isArray(value)) {
          acc[key] = value.map((v) => decodeURIComponent(v)); // Handle arrays
        } else {
          acc[key] = decodeURIComponent(value as string);
        }
      } catch (e) {
        console.error(`Error decoding ${key}: ${obj[key]}`, e);
      }
      return acc;
    }, {});
  };

  const decodeArrayOfObjects = (array: DataObject[]): DataObject[] => {
    return array.map(decodeObjectValues);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log('API response:', response.data); // Log the response

        if (response.data && Array.isArray(response.data.results)) {
          const decodedData = decodeArrayOfObjects(response.data.results);
          console.log('Decoded data:', decodedData); // Log the decoded data
          setData(decodedData);
        } else {
          throw new Error('API response does not contain results array');
        }
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

export default useDecodedData;
