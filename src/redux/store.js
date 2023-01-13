import { combineReducers, createStore, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { createPostReducer } from "./reducers/createPostReducer";
import { darkModeReducer } from "./reducers/darkModeReducer"

const reducer = combineReducers({
    darkModeState: darkModeReducer,
    createPostState: createPostReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["darkModeState", "createPostState"]
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers());
const persistor = persistStore(store)

export { store, persistor }