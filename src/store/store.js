import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import nameReducer from './nameReducer';

const reducers = combineReducers({
    namePage: nameReducer,
});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store;

export default store;