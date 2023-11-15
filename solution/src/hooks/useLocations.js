import { useEffect, useState } from "react";
import { getLocations } from "../mock-api/apis";

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