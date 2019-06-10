import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "Reducer/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
