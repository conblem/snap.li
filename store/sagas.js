import { eventChannel, END } from "redux-saga";
import { takeLatest, call, put, all, take } from "redux-saga/effects";
import firebase from "firebase";

import { requestChats, receiveChats, errorChats } from "./actions";

const chatsChannel = () =>
  eventChannel(emit => {
    const ref = firebase.database().ref("chats");
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

export function* chats() {
  const channel = yield call(chatsChannel);
  try {
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } finally {
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

function* watchRequestChat() {
  yield takeLatest("REQUEST_CHATS", fetchChats);
}

export default function* rootSaga() {
  yield all([watchRequestChat()]);
}
