import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";
import _, { flip } from "lodash";

import chats from "./chats";
import user from "./user";
import { Stack } from "../../containers/Main";

console.log(flip);
const navigation = _.flip(Stack.router.getStateForAction);

export default combineReducers({ chats, user, navigation });
