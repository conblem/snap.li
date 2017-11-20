import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

import chats from "./chats";

export default combineReducers({ chats });
