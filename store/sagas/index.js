import { all } from "redux-saga/effects";

import { watchRequestChat } from "./chats";

export default function* rootSaga() {
  yield all([watchRequestChat()]);
}
