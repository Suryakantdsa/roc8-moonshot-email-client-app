import { useEffect, useState } from 'react';

const useGetEmailDetails = (id) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API call to get email details
        let data = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`);
        data = await data.json();
        setResult(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return result;
};

export default useGetEmailDetails;
