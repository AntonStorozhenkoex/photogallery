import { applyMiddleware, combineReducers, createStore } from "redux";
import { photoGalleryReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  gallery: photoGalleryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => store.getState());

export default store;
