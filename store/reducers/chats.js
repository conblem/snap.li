import { handleActions } from "redux-actions";

import { errorChats, receiveChats, requestChats } from "../actions";

export default handleActions(
  {
    [receiveChats]: (state, { payload }) => ({
      isFetching: false,
      error: "",
      items: payload
    }),
    [requestChats]: state => ({
      ...state,
      isFetching: true
    }),
    [errorChats]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload
    })
  },
  {
    isFetching: false,
    items: [],
    error: ""
  }
);
