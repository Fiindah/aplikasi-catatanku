import React from 'react';

function NotesSearch({ search, onSearch }) {
  return (
    <div className='note-search'>
      <input type='text' placeholder='Telusuri catatan...' value={search} onChange={onSearch} />
    </div>
  );
}

export default NotesSearch;
