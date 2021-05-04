import { GroupAccess } from '../types';
import { 
  ReduxAction,
  Group
} from '../types'

// mock state

const groupCategories = {
  'fgdggsdgd-gdsgfdsg-jhgfhjgf': {
    name: 'Sustainable Fashion'
  }
}

const mockState = [
  {
    headerPicture: '',
    title: 'SellTradeSlowFashion',
    listingsAmount: 993,
    discussionsAmount: 6434,
    location: 'United States',
    membersAmount: 522,
    categoryId: 'fgdggsdgd-gdsgfdsg-jhgfhjgf',
    groupAccess: GroupAccess.PRIVATE,
    firstTenMembers: []
  }
] as Group[]

// actions

const ADD_GROUP = 'ADD_GROUP'

// action creators 

const addGroup = (group: Group) => ({
  type: ADD_GROUP, 
  payload: group
})

// TODO - REMOVE MOCKSTATE WHEN YOU LINK THIS WITH THE BACKEND
export default function groupsReducer(state = mockState, action: ReduxAction){
  switch(action.type){
    default:
        return state
  }
}