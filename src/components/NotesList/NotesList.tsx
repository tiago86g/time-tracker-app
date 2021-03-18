import React, { useState } from 'react';
import { Note, Time } from '../../types/types';
import './NotesList.css';

interface NotesListProps {
  notes: Note[];
  times: Time[];
}

export const NotesList: React.FC<NotesListProps> = ({ notes, times }) => {
  return (
    <div className="user-list">
      <ul>
        {times.map((time) => (
          <li key={time.id} className="user-time">{`${time.hour} hours`}</li>
        ))}
      </ul>
      <ul>
        {notes ? (
          notes.map((note: Note) => (
            <li
              className="user-note"
              key={note.id}
            >{`${note.user}: ${note.text}`}</li>
          ))
        ) : (
          <p>No notes</p>
        )}
      </ul>
    </div>
  );
};
