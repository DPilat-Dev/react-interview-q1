import { useState } from "react"
import useLocations from "../hooks/useLocations";
import { isNameTaken } from "../utils/validationModule";

const Form = ({onAddData, data}) => {
  /* There were a few options when it came to building forms:

      First, I could use 'useRef' to access the elements in the DOM.
      Second, I could use 'useState' variables and update them when the user types into the input fields.
      Third, I could use React Hook Forms, where I can build the form quickly with less code and no longer have to worry about refs or state hooks.
      Lastly, I could have used schema-based validation libraries such as Joi, Yup, Zod, etc.

      The choice I went with was to use 'useState' and keep the assessment as vanilla as possible.*/
    const [name, setName] = useState('');
    const [country, setCountry] = useState('Canada');

    const [isNameValid, setIsNameValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    /* Created a hook 'useLocations' to simulate grabbing data from an api and get the date to the form select HTML element */
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

      // Validates input data if name is Bland null or empty only if it gets past the disabled add button 
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
    

  /* "The form layout follows what was presented in the mock image and requirements with one interpretation. 
      The structure begins with a name input field, followed by a locations select element, and finally,
       two buttons ('Clear' and 'Add') aligned to the right. Based on the mock image and stated requirements, 
       the name input is validated when the 'Add' button is submitted. 
       However, the one element that wasn't mentioned in the mock diagram was the 'Clear' button, 
       for which I decided to make it reset the form rather than clearing the table. Since the 'Clear' and 'Add' buttons relate to the data of the form, 
       I assumed that the 'Clear' button would only interact with the form component.*/
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