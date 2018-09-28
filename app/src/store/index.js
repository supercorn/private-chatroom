import {applyMiddleware, createStore, compose} from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../reducers";

// for redux devtools, install extenion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "root",
    storage,
    blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(ReduxPromise, ReduxThunk))
);

const persistor = persistStore(store);

export {store, persistor};
