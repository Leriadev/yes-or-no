import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunkMiddleWare from 'redux-thunk'
import answerReducer from "./answerReducer";
import appReducer from "./appReducer"

let reducers = combineReducers({
    app: appReducer,
    answer: answerReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)), )
window.store = store;
export default store
