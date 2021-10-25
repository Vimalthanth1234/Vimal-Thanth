import { combineReducers } from "redux";
import getUserInputReducer from "./reducers/getUserInputReducer";

const rootReducer = combineReducers({
    userInput:getUserInputReducer
})

export default rootReducer
