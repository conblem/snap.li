import { eventChannel, END } from "redux-saga";
import { takeLatest, call, put, take } from "redux-saga/effects";
import firebase from "firebase";

import { errorUser, receiveUser, successLogout, errorLogout } from "../actions";
import { sagaMiddleware } from "../index";
import { chats } from "./chats";

const authChannel = () =>
  eventChannel(emit =>
    firebase.auth().onAuthStateChanged(
      user => {
        if (user === null) return;
        emit(receiveUser(user));
        sagaMiddleware.run(chats, user.uid);
      },
      error => {
        emit(errorUser(error));
      }
    )
  );

export function* auth() {
  const channel = yield call(authChannel);
  try {
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } finally {
    console.log("chat close");
    channel.close();
  }
}

const logoutPromise = async () => await firebase.auth().signOut();

function* logout() {
  try {
    yield call(logoutPromise);
    yield put(successLogout());
  } catch (error) {
    yield put(errorLogout(error));
  }
}

export function* watchRequestLogout() {
  yield takeLatest("REQUEST_LOGOUT", logout);
}
