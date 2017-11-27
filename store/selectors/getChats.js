import { createSelector } from "reselect";
import { formatRelative } from "date-fns";
import { chain } from "lodash";

const getChats = state => state.chats.items;

const firstSnapDate = chat => new Date(Object.values(chat)[0]);

export default createSelector(getChats, chats =>
  chain(chats)
    .map((chat, key) => ({
      key,
      title: key,
      subTitle: formatRelative(firstSnapDate(chat), new Date()),
      snaps: Object.keys(chat)
    }))
    .filter(chat => !!chat)
    .value()
);
