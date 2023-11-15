import { isNameValid } from "../mock-api/apis"

/* The 'validationModule' uses the mock-api's 'isNameValid' implementation. 
    If the name is not equal to 'invalid name,' it returns 'true.' 
    So, the approach here is to check if the provided name is in the data. 
    If it is, then it returns and calls 'isNameValid,' passing in 'invalid name.' 
    Otherwise, it just calls 'isNameValid' with the 'name' and returns the value.*/
export const isNameTaken = async (name, data) => {

    //Check if the name is in the list do a .trim() to remove whitespace form the front or end of name
    const isNameInList = data.some((item) => item.name.trim() === name.trim());

    if(isNameInList) {
        return await isNameValid('invalid name');
    }

    return await isNameValid(name);
}