import React from 'react';
import NotesDelete from './NotesDelete';

function NotesAction({ id, onDelete }) {
    return (
    <div className="note-item__action">
        <NotesDelete id={id} onDelete={onDelete}/>
        </div>
 );
}
 
export default NotesAction;
