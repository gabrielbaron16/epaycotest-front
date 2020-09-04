import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const getBalanceRequest = async (object) => {
  try {
    const response = await axios.post(`${serviceUrl}/client/balance`, object);
    return response;
  } catch (error) {
    console.log(error.response)
    if(error.response) return error.response
  }
};
