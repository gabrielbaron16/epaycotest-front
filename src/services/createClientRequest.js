import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const createClientRequest = async (client) => {
   return await axios.post(`${serviceUrl}/client`, client); 
}
