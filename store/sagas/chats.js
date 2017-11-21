import { eventChannel, END } from "redux-saga";
import { takeLatest, call, put, take } from "redux-saga/effects";
import firebase from "firebase";

import { requestChats, receiveChats, errorChats } from "../actions";

const chatsChannel = uid =>
  eventChannel(emit => {
    const ref = firebase.database().ref(uid + "/chats");
    ref.on(
      "value",
      snapshot => {
        emit(receiveChats(snapshot.val()));
      },
      error => {
        emit(errorChats(error));
        emit(END);
      }
    );

    return () => ref.off("value");
  });

export function* chats(uid) {
  const channel = yield call(chatsChannel, uid);
  try {
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } finally {
    console.log('chats closed')
    channel.close();
  }
}

function* fetchChats() {
  yield put(requestChats());
  try {
    const snapshot = yield call(firebase.database().ref("chats").once, "value");
    yield put(receiveChats(snapshot.val()));
  } catch (error) {
    yield put(errorChats(error));
  }
}

export function* watchRequestChat() {
  yield takeLatest("REQUEST_CHATS", fetchChats);
}
