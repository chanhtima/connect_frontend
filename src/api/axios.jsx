import axios from "axios";
import { API_END_POINT_URL } from "../config/env";

const defaultAxios = axios.create({
  baseURL: API_END_POINT_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default defaultAxios;
