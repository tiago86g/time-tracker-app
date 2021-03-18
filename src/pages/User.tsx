import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getUser } from '../utils/getUsers';
import { TrackInputForm } from '../components/TrackInputForm/TrackInputForm';
import {
  setNotesToLocal,
  setTimesToLocal,
  getTimesFromLocal,
  getNotesFromLocal,
} from '../utils/local';
import { Note, Time, AddNote, AddTime } from '../types/types';
import { NotesList } from '../components/NotesList/NotesList';

interface UserProps {
  match: any;
}

export const User: React.FC<UserProps> = ({ match }) => {
  const [currentUser, setCurrentUser] = useState('');

  const initialNotes: Note[] = getNotesFromLocal('notes') || [];
  const initialTime: Time[] = getTimesFromLocal('times') || [];
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
    setTimesToLocal(currentUser, times);
  };

  useEffect(() => {
    if (!match) {
      alert('no user selected');
    } else {
      const userId = match.params.id.slice(2);
      getUser(userId).then((items) => {
        setCurrentUser(items.name);
        setNotes(getNotesFromLocal(items.name));
        setTimes(getTimesFromLocal(items.name));
      });
    }
  }, [match]);

  useEffect(() => {
    setNotesToLocal(currentUser, notes);
    setTimesToLocal(currentUser, times);
  }, [notes, times]);

  return (
    <div className="container">
      <h2 className="user-name">{`Hi ${currentUser}`}</h2>
      <TrackInputForm addNote={addNote} addTime={addTime} />
      <NotesList notes={notes} times={times} />
    </div>
  );
};
