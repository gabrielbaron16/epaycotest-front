import axios from "axios";
import { serviceUrl } from "../constants/serviceUrl";

export const rechargeWalletRequest = async (object) => {
  return await axios.post(`${serviceUrl}/client/wallet`, object);
}
