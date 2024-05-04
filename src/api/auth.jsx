import defaultAxios from "./axios";

export function LoginApi(input) {
  return defaultAxios.post(`/login`, input);
}
