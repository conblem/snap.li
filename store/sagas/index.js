import { all } from "redux-saga/effects";

import { watchRequestChat } from "./chats";
import {auth} from './auth'

export default function* rootSaga() {
  yield all([watchRequestChat(), auth()]);
}
