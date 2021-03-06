/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Explore: undefined;
  Group: {
    groupId: string;
  };
};

export type ReduxAction = {
  type: string;
  payload: object;
};

export type GroupMember = {
  firstName: string;
  lastName: string;
  profilePicture: string;
};

export type Group = {
  id: string;
  headerPicture: string;
  title: string;
  listingsAmount: number;
  discussionsAmount: number;
  location: string;
  membersAmount: number;
  categoryId: string;
  groupAccess: GroupAccess;
  firstTenMembers: GroupMember[];
};

export enum GroupAccess {
  PRIVATE = "private",
  PUBLIC = "public",
}

export type GroupCategory = {
  name: string;
  id: string;
};

export type GroupItem = {
  id: string,
  picture: string;
  title: string;
  brand: string;
  size: string;
  isFavourited: boolean;
  ownerName: string;
};

export enum HTTPMethods {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  PUT = "put",
}

export type SignInPayload = {
  username: string;
  password: string;
};

export type GetGroupParams = {
  groupId: string;
};

export type ListItemInGroupParams = {
  item: GroupItem;
};

export type ToggleFavouriteInItemParams = {
  itemId: string;
};
