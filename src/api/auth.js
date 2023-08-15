import { Endpoints } from "../constants/endpoints";
import axios from "../core/axios";

export const signIn = async (form) => {
  return (await axios.post(Endpoints.AUTH_LOGIN, form)).data;
};

export const getProfile = async () => {
  return (await axios.get(Endpoints.PROFILE)).data;
};
