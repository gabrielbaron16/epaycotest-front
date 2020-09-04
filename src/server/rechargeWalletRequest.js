import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const rechargeWalletRequest = async (object) => {
  try {
    const response = await axios.post(`${serviceUrl}/client/wallet`, object);
    return response;
  } catch (error) {
    console.log(error.response)
    if(error.response) return error.response
  }
};
