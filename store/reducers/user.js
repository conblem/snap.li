import { handleActions } from "redux-actions";

import { receiveUser, errorUser, successLogout, errorLogout } from "../actions";

const initialState = {
  email: "",
  uid: "",
  error: ""
};

export default handleActions(
  {
    [receiveUser]: (state, { payload }) => ({
      email: payload.email,
      uid: payload.uid,
      error: ""
    }),
    [errorUser]: (state, { payload }) => ({
      ...state,
      error: payload.message
    }),
    [errorLogout]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [successLogout]: () => initialState
  },
  initialState
);
