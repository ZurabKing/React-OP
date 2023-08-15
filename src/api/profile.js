import { Endpoints } from "../constants/endpoints";
import axios from "../core/axios";

export const getTeacherProfile = async (id) => {
  return (await axios.get(`${Endpoints.TEACHER}/${id}`)).data;
};
