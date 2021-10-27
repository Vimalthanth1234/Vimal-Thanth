import { combineReducers } from "redux";
import incNumber from "./incNumber";
import getDatareducer from "./getDatareducer";
import getJSONReducer from "./getJSONReducer";

const rootReducer = combineReducers({
    incNumber:incNumber,
    getDatareducer:getDatareducer,
    getJSONReducer:getJSONReducer
    
})
export default rootReducer