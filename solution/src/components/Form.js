import { useState } from "react"
import useLocations from "../hooks/useLocations";
import { isNameTaken } from "../utils/validationModule";

const Form = ({onAddData, data}) => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('Canada');

    const [isNameValid, setIsNameValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const locations = useLocations();

    const handleSubmit = async(event) => {
      event.preventDefault();

      //Validate input data
      const response = await isNameTaken(name,data);

      if(!response){
        setIsNameValid(false);
        setErrorMessage('The name has already been taken');
        return;
      }

      if(!name){
        setIsNameValid(false);
        setErrorMessage('Input a name');
        return;
      }
      
      // Pass data to the parent component
      onAddData({name,country});

      //Clear/Rest the form fields
      handleFormReset();
    }

    const handleFormReset = () => {
      setIsNameValid(true);
      setName('');
      setCountry('Canada');
    }
    
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className=" md-3 mt-2">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input value={name} type="text" className="form-control" id="inputName" onChange={(event) => setName(event.target.value)}/>
        {!isNameValid && (
          <div className="alert alert-danger"><b>Validation Error</b>: {errorMessage}</div>
        )}
      </div>
      <div className="md-3 mt-2">
        <label htmlFor="selectLocation" className="form-label">Location</label>
        <select value={country} className="form-select" id="selectLocation" onChange={(event) => setCountry(event.target.value)}>
          {locations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="form-group d-flex flex-wrap justify-content-end mt-2">
          <button type="button" className="btn btn-secondary col-12 col-sm-auto mb-2 mb-sm-0 " onClick={handleFormReset}>Clear</button>
          <button type="submit" className="btn btn-primary col-12 col-sm-auto ms-sm-2" disabled={!name.trim()}>Add</button>
      </div>
    </form>
  )
}

export default Form