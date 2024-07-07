import axios from 'axios';

export const addUser = async (data) => {
    const URL = "";

    try {
        return await axios.post(`${URL}/add`, data);
        //api calls are async req. so await is used to handle then or using .then method but due to callback hell so we use await ... await is always used with async fucntion 
    }
    catch (error) {
        console.log("error while calling the user api ", error);
    }
}