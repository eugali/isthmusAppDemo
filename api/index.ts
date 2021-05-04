import { ApisauceInstance, create as apisauceCreate } from "apisauce";
import { HTTPMethods } from '../types';

let api: ApisauceInstance;

const defaultAxiosConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
};

const create = () => (api = apisauceCreate(defaultAxiosConfig));

const getInstance = () => api;

const setAuthToken = (token: string) =>
  api.setHeader("Authorization", `Bearer ${token}`);

const request = async (method: HTTPMethods, url = "", params = {}, axiosConfig = {}) => {
  try {
    const resp = await api[method](url, params, axiosConfig);

    if (resp.ok) {
      return resp?.data ?? null;
    } else throw new Error('Response not ok')
  } catch (e) {
    // log 
    return null;
  }
};

export default {
  create,
  getInstance,
  request,
  setAuthToken,
};
