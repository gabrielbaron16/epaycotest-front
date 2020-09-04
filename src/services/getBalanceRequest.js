import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const getBalanceRequest = async (object) => {
  return await axios.post(`${serviceUrl}/client/balance`, object);
}