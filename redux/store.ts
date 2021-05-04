import { createStore, combineReducers } from "redux";

import groups from "./groupsReducer";
import groupCategories from "./groupCategoriesReducer";

const rootReducer = combineReducers({
  groups,
  groupCategories,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
