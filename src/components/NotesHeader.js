import React from "react";
import NotesSearch from "./NotesSearch";

function NotesHeader({ search, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>My Notes</h1>
      <NotesSearch search={search} onSearch={onSearch} />
    </div>
  );
}
export default NotesHeader;
