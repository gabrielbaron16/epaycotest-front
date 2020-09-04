import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const createTransactionRequest = async (object) => {
  return await axios.post(`${serviceUrl}/transaction`, object);
};
