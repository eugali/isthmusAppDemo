import { HTTPMethods, SignInPayload } from "../types";
import API from "./index";

const signIn = (params: SignInPayload) => {
  return API.request(HTTPMethods.POST, "v1/auth/login", params);
}

