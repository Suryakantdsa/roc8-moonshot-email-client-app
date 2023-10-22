import { useState, useEffect } from 'react';

function useFormattedDate(timestamp) {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');

      return `${day}/${month}/${year}  ${hours}:${minutes}`;
    };

    setFormattedDate(formatDate(timestamp));
  }, [timestamp]);

  return formattedDate;
}

export default useFormattedDate;
