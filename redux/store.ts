import { createStore, combineReducers } from 'redux'

import groups from './groupsReducer'

const rootReducer = combineReducers({
  groups
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store