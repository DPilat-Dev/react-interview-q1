import { useState } from "react"
import useLocations from "../hooks/useLocations";
import { isNameTaken } from "../utils/validationModule";

const Form = ({onAddData, data}) => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('Canada');

    const [isNameValid, setIsNameValid] = useState(true);

    const locations = useLocations();

    const handleSubmit = async(event) => {
      event.preventDefault();

      //Validate input data
      const response = await isNameTaken(name,data);

      if(!response){
        setIsNameValid(false);
        return;
      }
      setIsNameValid(true);
      
      // Pass data to the parent component
      onAddData({name,country});

      //Clear the form fields
      handleClear();
    }

    const handleClear = () => {
      setName('');
      setCountry('Canada');
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name: </p>
        <input value={name} type="text" onChange={(event) => setName(event.target.value)}/>
      </div>
      <div>
        {!isNameValid && (
          <p>The name {name} has already been taken</p>
        )}
      </div>
      <div>
        <select value={country} onChange={(event) => setCountry(event.target.value)}>
          {locations.map((location) => (
            <option value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div>
        <button type="button" onClick={handleClear}>Clear</button>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default Form