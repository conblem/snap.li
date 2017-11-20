import { createAction } from "redux-actions";

export const requestChats = createAction("REQUEST_CHATS");
export const receiveChats = createAction("RECEIVE_CHATS");
export const errorChats = createAction("ERROR_CHATS");
