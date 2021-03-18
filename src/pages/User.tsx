import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getUser } from '../utils/getUsers';
import { TrackInputForm } from '../components/TrackInputForm/TrackInputForm';
import {
  setNotesToLocal,
  setTimeToLocal,
  getTimeFromLocal,
  getNotesFromLocal,
} from '../utils/local';
import { Note, Time, AddNote, AddTime } from '../types/types';

interface UserProps {
  match: any;
}

export const User: React.FC<UserProps> = ({ match }) => {
  const [currentUser, setCurrentUser] = useState('');

  const initialNotes: Note[] = getNotesFromLocal('notes') || [];
  const initialTime: Time[] = getTimeFromLocal('times') || [];
  const [notes, setNotes] = useState(initialNotes);
  const [times, setTimes] = useState(initialTime);

  const addNote: AddNote = (newNote) => {
    setNotes([...notes, { id: uuidv4(), text: newNote, user: currentUser }]);
    setNotesToLocal(currentUser, notes);
  };
  const addTime: AddTime = (newTime) => {
    setTimes([
      ...times,
      { id: uuidv4(), hour: Number(newTime), user: currentUser },
    ]);
    setTimeToLocal(currentUser, times);
  };

  useEffect(() => {
    if (!match) {
      alert('no user selected');
    } else {
      const userId = match.params.id.slice(2);
      getUser(userId).then((items) => {
        setCurrentUser(items.name);
        setNotes(getTimeFromLocal(items.name));
        setTimes(getNotesFromLocal(items.name));
      });
    }
  }, [match]);

  useEffect(() => {
    setNotesToLocal(currentUser, notes);
    setTimeToLocal(currentUser, times);
  }, [notes, times]);

  return (
    <div className="container">
      <h2 className="user-name">{`Hi ${currentUser}`}</h2>
      <TrackInputForm addNote={addNote} addTime={addTime} />
      {console.log(notes)}
      <ul>
        {notes ? (
          notes.map((note: Note) => (
            <li
              className="user-name"
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
