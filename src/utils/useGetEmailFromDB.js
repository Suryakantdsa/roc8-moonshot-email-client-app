// useGetEmailFromDB.js

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEmailDatafromDB } from '../utils/emailSlice';


const useGetEmailFromDB = async () => {
    // const [result,getResult]=useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // API call to get all data
      let data = await fetch("https://flipkart-email-mock.now.sh/");
      data = await data.json();
    //   console.log(data)
      // Dispatch the action to update the store with the fetched data
      dispatch(getEmailDatafromDB(data));
    //   getResult(result)
    //   return result
    } catch (error) {
      // Handle any errors
      console.error('Error fetching data:', error);
    }
  };
  
};

export default useGetEmailFromDB;