import { isNameValid } from "../mock-api/apis"

export const isNameTaken = async (name, data) => {

    const isNameInList = data.some((item) => item.name === name);

    if(isNameInList) {
        return await isNameValid('invalid name');
    }

    return await isNameValid(name);
}