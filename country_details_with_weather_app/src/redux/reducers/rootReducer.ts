import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import modalreducer from "./modalreducer";
import getWeatherDataReducer from "./getWeatherDataReducer";

const rootReducer = combineReducers({
    getDataReducer:getDataReducer,
    modalreducer:modalreducer,
    getWeatherDataReducer:getWeatherDataReducer
})

export default rootReducer