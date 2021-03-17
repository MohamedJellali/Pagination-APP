import appReducer from './reducer/appReducer'
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;