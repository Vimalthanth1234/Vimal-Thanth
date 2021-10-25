import { createStore,compose } from "redux";
import rootReducer from "./redux/rootReducer";
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers());
// const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store