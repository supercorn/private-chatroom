import {combineReducers} from "redux";
import {messagesReducer} from "./messages";

const appReducer = combineReducers({
    messages: messagesReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
