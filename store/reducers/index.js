import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

import chats from "./chats";
import user from "./user";

export default combineReducers({ chats, user });
