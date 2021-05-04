import { 
  ReduxAction,
  GroupCategory
} from '../types'

// mock state

const mockState = [
  {
    id: '1234',
    name: 'Sustainable Fashion'
  }
] as GroupCategory[]

// actions

const ADD_GROUP_CATEOGORY = 'ADD_GROUP_CATEGORY'

// action creators 

// TODO - REMOVE MOCKSTATE WHEN YOU LINK THIS WITH THE BACKEND
export default function groupCategoriesReducer(state = mockState, action: ReduxAction) {
  switch(action.type){
    default:
        return state
  }
}