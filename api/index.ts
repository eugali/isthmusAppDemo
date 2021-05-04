import { ApisauceInstance, create as apisauceCreate } from "apisauce";
import { HTTPMethods } from "../types";

const defaultAxiosConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
};

let api: ApisauceInstance = apisauceCreate(defaultAxiosConfig);

const setAuthToken = (token: string) =>
  api.setHeader("Authorization", `Bearer ${token}`);

const request = async (
  method: HTTPMethods,
  url = "",
  params = {},
  axiosConfig = {},
) => {
  let resp
  try {
    resp = await api[method](url, params, axiosConfig);

    if (resp.ok) {
      return resp?.data ?? null;
    } else throw new Error("Response not ok");
  } catch (e) {
    // log
    return null;
  }
};

export default {
  request,
  setAuthToken,
};
