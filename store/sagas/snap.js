import { takeEvery, call, put } from "redux-saga/effects";
import firebase from "firebase";

const getIdTokenPromise = async () =>
  await firebase.auth().currentUser.getIdToken();

function* postSnap({ payload: { to, photo } }) {
  try {
    console.log("start");
    const from = yield call(getIdTokenPromise);
    console.log(from);
    console.log(photo);
    const body = new FormData();
    body.append("photo", {
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
    console.log("success");
  } catch (error) {
    console.error(error);
  }
}

export function* watchRequestPostSnap() {
  yield takeEvery("REQUEST_POST_SNAP", postSnap);
}
