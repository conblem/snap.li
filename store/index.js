import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import firebase from "firebase";

import config from "../config";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

firebase.initializeApp(config.firebase);
export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
