import { GroupAccess, GroupMember } from "../types";
import { ReduxAction, Group } from "../types";

// actions

const ADD_GROUP = "ADD_GROUP";
const SET_GROUPS = "SET_GROUPS"

// action creators

export const addGroup = (group: Group) => ({
  type: ADD_GROUP,
  payload: group,
});

export const setGroups = (groups:Group[]) => ({
  type: SET_GROUPS,
  payload: groups
})

export default function groupsReducer(state = [], action: ReduxAction) {
  switch (action.type) {
    case SET_GROUPS: 
      return [...action.payload]
    default:
      return state;
  }
}

// mock state

const mockState = [
  {
    id: "aaaa",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "1234",
    groupAccess: GroupAccess.PRIVATE,
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ] as GroupMember[],
  },
  {
    id: "bbbb",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "6789",
    groupAccess: GroupAccess.PRIVATE,
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ] as GroupMember[],
  },
  {
    id: "cccc",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "abcd",
    groupAccess: GroupAccess.PRIVATE,
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ] as GroupMember[],
  },
  {
    id: "dddd",
    headerPicture:
      "https://assets.dorik.com/5faa728126674600114e7e6f/images/clothing_waste_2_ogvh5iqy.jpg",
    title: "SellTradeSlowFashion",
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: "United States",
    membersAmount: 522,
    categoryId: "efgh",
    groupAccess: GroupAccess.PRIVATE,
    firstTenMembers: [
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
      {
        firstName: "Eugenio",
        lastName: "Galioto",
        profilePicture:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHNWFP087JaGg/profile-displayphoto-shrink_800_800/0/1516678907976?e=1625702400&v=beta&t=Oe3gIzZZKbpRaNCczQoUEai7d1G8Vk2hQsx6yhmJakw",
      },
    ] as GroupMember[],
  },
] as Group[];
