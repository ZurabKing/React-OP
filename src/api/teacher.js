import { Endpoints } from "../constants/endpoints";
import axios from "../core/axios";

export const getTeacherProfile = async (id) => {
  return (await axios.get(`${Endpoints.TEACHER}/${id}`)).data;
};

export const addTeacher = async (form) => {
  return (await axios.post(Endpoints.TEACHER, form)).data;
};
