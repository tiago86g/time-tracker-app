import React from 'react';
import { Note, Time } from '../../types/types';
import './NotesList.css';

interface NotesListProps {
  notes: Note[];
  times: Time[];
}

export const NotesList: React.FC<NotesListProps> = ({ notes, times }) => {
  return (
    <div className="NotesList_user-list">
      <ul>
        {times.map((time) => (
          <li key={time.id} className="NotesList_user-time">
            {`${time.hour}h`}
          </li>
        ))}
      </ul>
      <ul>
        {notes ? (
          notes.map((note: Note) => (
            <li
              className="NotesList_user-note"
              key={note.id}
            >{`${note.text}`}</li>
          ))
        ) : (
          <p>No notes</p>
        )}
      </ul>
    </div>
  );
};
