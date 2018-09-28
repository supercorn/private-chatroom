import {combineReducers} from "redux";
import {alertsReducer} from "./alert";

const appReducer = combineReducers({
    alerts: alertsReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
