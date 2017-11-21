import { handleActions } from "redux-actions";

import { receiveUser, errorUser } from "../actions";

export default handleActions(
  {
    [receiveUser]: (state, { payload }) => ({
      email: payload.email,
      error: ""
    }),
    [errorUser]: (state, { payload }) => ({
      ...state,
      error: payload.message
    })
  },
  {
    email: "",
    error: ""
  }
);
