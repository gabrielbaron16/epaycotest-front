import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const confirmTransactionRequest = async (object) => {
  return await axios.put(`${serviceUrl}/transaction/confirm`, object);
}
