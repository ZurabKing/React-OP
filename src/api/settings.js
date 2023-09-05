import { Endpoints } from "../constants/endpoints";
import axios from "../core/axios";

export const postSettings = async (id,form) => {
  return (await axios.post(`${Endpoints.SCHOOLS}/${id}`, form));
};
