import { useEffect, useState } from "react";
import { getLocations } from "../mock-api/apis";

/* Created a hook 'useLocations' to simulate grabbing data from an API. 
    This approach simulates using the fetch('api url') with a check for any errors when attempting to retrieve the data. 
    Originally, you would have used await fetch to fetch the response, checked if the response is 'ok', 
    and finally converted the response to get the final result before returning the data. 
    Another approach would be to use a library such as 'axios' to fetch data from an API. 
    The reason for this implementation is to keep it as close to a scratch implementation as possible*/
const useLocations = () => {
    const [locations, setLocations] = useState([]);

    // simulate Fetch data from an api
    useEffect(() => {
      const fetchData = async () => {
        try{
          const result = await getLocations();

          setLocations(result);
        } catch (error) {
          console.error('error fetching data: ', error);
        }
      };
      fetchData();
    }, []);
    return locations;
}

export default useLocations;