import { combineReducers } from "redux";
import modalReducer from "./reducers/modalReducer";
import getDataReducer from "./reducers/getDataReducer";
import getJSONReducer from "./reducers/getJSONReducer";
import searchReducer from "./reducers/searchReducer";
const rootReducer = combineReducers({
    getDataReducer:getDataReducer,
    JSONReducer:getJSONReducer,
    modalReducer:modalReducer,
    searchReducer:searchReducer
})
export default rootReducer