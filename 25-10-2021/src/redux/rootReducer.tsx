import { combineReducers } from "redux";
import getDataReducer from "./reducers/getDataReducer";
import getJSONReducer from "./reducers/getJSONReducer";
const rootReducer = combineReducers({
    getDataReducer:getDataReducer,
    JSONReducer:getJSONReducer
})
export default rootReducer