import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userLoginReducer } from './reducers/userReducers';
import { serverListReducer } from './reducers/serverListReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    serverList: serverListReducer,
});

const tokenFromStorage = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null;

const initialState = {
    userLogin: { token: tokenFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
