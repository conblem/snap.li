import { takeEvery, call, put } from "redux-saga/effects";
import firebase from "firebase";

import { navigateTabs } from "../actions";

const getIdTokenPromise = async () =>
  await firebase.auth().currentUser.getIdToken();

function* postSnap({ payload: { to, photo } }) {
  const from = yield call(getIdTokenPromise);
  const body = new FormData();
  body.append("photo", {
    // maybe remove
    name: Date.now() + ".jpg",
    uri: photo,
    type: "image/jpeg"
  });
  yield call(
    fetch,
    "https://us-central1-snapchat-li.cloudfunctions.net/post/",
    {
      method: "post",
      headers: {
        from,
        to
      },
      body
    }
  );
  yield put(navigateTabs());
}

export function* watchRequestPostSnap() {
  yield takeEvery("REQUEST_POST_SNAP", postSnap);
}

function* getSnap({ payload: { from, snap } }) {
  const to = yield call(getIdTokenPromise);
  try {
    console.log(from);
    console.log(to);
    console.log(snap);
    const res = yield call(
      fetch,
      "https://us-central1-snapchat-li.cloudfunctions.net/get/",
      {
        headers: {
          from,
          to,
          snap
        }
      }
    );
    const photo = yield call(res.text);
    console.log(photo);
  } catch (error) {
    console.error(error);
  }
}

export function* watchRequestGetSnap() {
  yield takeEvery("REQUEST_GET_SNAP", getSnap);
}
