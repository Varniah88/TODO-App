import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  todoListReducer,
  todoCreateReducer,
  todoDeleteReducer,
  todoUpdateReducer,
} from "./reducers/todoReducer";

const reducer = combineReducers({
  todoList: todoListReducer,
  todoCreate: todoCreateReducer,
  todoDelete: todoDeleteReducer,
  todoUpdate: todoUpdateReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
