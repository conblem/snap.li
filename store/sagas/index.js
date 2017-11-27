import { all } from "redux-saga/effects";

import { watchRequestChat } from "./chats";
import { auth, watchRequestLogout } from "./auth";
import { watchRequestPostSnap } from "./snap";

export default function* rootSaga() {
  yield all([
    watchRequestChat(),
    auth(),
    watchRequestLogout(),
    watchRequestPostSnap()
  ]);
}
