import { createAction } from "redux-actions";
import { NavigationActions } from 'react-navigation';

export const requestChats = createAction("REQUEST_CHATS");
export const receiveChats = createAction("RECEIVE_CHATS");
export const errorChats = createAction("ERROR_CHATS");

export const receiveUser = createAction("RECEIVE_USER");
export const errorUser = createAction("ERROR_USER");