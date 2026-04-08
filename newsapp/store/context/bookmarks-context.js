// this file holds the bookmarks context and provider //
// it stores an array of bookmarked news ids and exposes add/remove functions //

import { createContext, useState } from 'react';

// create the context object //
export const BookmarksContext = createContext({
  ids: [],               // array of bookmarked news ids //
  addBookmark: (id) => {}, 
  removeBookmark: (id) => {},
});

// provider component that wraps the entire app //
export function BookmarksContextProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // add a news id to bookmarks //
  function addBookmark(id) {
    setBookmarkedIds((currentIds) => [...currentIds, id]);
  }

  // remove a news id from bookmarks //
  function removeBookmark(id) {
    setBookmarkedIds((currentIds) =>
      currentIds.filter((storedId) => storedId !== id)
    );
  }

  // value passed to all consumers //
  const value = {
    ids: bookmarkedIds,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}