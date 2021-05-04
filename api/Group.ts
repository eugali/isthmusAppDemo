import {
  HTTPMethods,
  GetGroupParams,
  ListItemInGroupParams,
  ToggleFavouriteInItemParams,
} from "../types";
import API from "./index";

export default class Group {
  static getAllGroups() {
    return API.request(HTTPMethods.GET, "api/groups/all", {});
  }

  static getGroup(params: GetGroupParams) {
    return API.request(HTTPMethods.GET, `api/groups/${params.groupId}`, {});
  }

  static listItemInGroup(params: ListItemInGroupParams) {
    return API.request(HTTPMethods.PUT, "api/groups/item", params);
  }

  static toggleFavouriteInItem(params: ToggleFavouriteInItemParams) {
    return API.request(HTTPMethods.PATCH, "api/groups/item", params);
  }
}
