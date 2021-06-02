import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { weatherReducer } from '../reducers';


const rootReducer = combineReducers({
    weather: weatherReducer
});

const middlewares = [
    thunk,
]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))