import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const createClientRequest = async (client) => {
  try {
    const response = await axios.post(`${serviceUrl}/client`, client);
    return response;
  } catch (error) {
    console.log(error.response)
    if(error.response) return error.response
  }
};
