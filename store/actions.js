import { createAction } from "redux-actions";
import { NavigationActions } from "react-navigation";

export const requestChats = createAction("REQUEST_CHATS");
export const receiveChats = createAction("RECEIVE_CHATS");
export const errorChats = createAction("ERROR_CHATS");

export const receiveUser = createAction("RECEIVE_USER");
export const errorUser = createAction("ERROR_USER");

export const requestLogout = createAction("REQUEST_LOGOUT");
export const successLogout = createAction("SUCCESS_LOGOUT");
export const errorLogout = createAction("ERROR_LOGOUT");

export const requestPostSnap = createAction("REQUEST_POST_SNAP");

export const requestGetSnap = createAction("REQUEST_GET_SNAP");

export const navigateTabs = () =>
  NavigationActions.navigate({ routeName: "Tabs" });
export const navigateSend = photo =>
  NavigationActions.navigate({ routeName: "Send", params: { photo } });
