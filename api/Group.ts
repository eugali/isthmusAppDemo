import {
  HTTPMethods,
  GetGroupParams,
  ListItemInGroupParams,
  ToggleFavouriteInItemParams,
} from "../types";
import API from "./index";


export const getAllGroups = async (reduxCallback) => {
  const groups = await API.request(HTTPMethods.GET, "v1/groups", {});
  reduxCallback(groups)
}

export const getGroup = async (params: GetGroupParams) => {
  const group = API.request(HTTPMethods.GET, `v1/groups/${params.groupId}`, {});
}

export const listItemInGroup = (params: ListItemInGroupParams) => {
  return API.request(HTTPMethods.PUT, `v1/groups/item/${params.item.id}`, params);
}

export const toggleFavouriteInItem = (params: ToggleFavouriteInItemParams) => {
  return API.request(HTTPMethods.PATCH, `v1/groups/item/${params.itemId}`, params);
}

