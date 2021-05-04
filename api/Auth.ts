import { HTTPMethods, SignInPayload } from "../types";
import API from "./index";

export default class Auth {
  static signIn(params: SignInPayload) {
    return API.request(HTTPMethods.POST, "api/auth/login", params);
  }
}
