import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/getUsers';
import { TrackInputForm } from '../components/TrackInputForm/TrackInputForm';
import {
  setNotesToLocal,
  setTimeToLocal,
  getTimeFromLocal,
  getNotesFromLocal,
} from '../utils/local';

interface UserProps {
  match: any;
}

export const User: React.FC<UserProps> = ({ match }) => {
  const [currentUser, setCurrentUser] = useState('');
  const initialNotes: Note[] = getNotesFromLocal(currentUser);
  console.log(initialNotes);
  const initialTime: Time = getTimeFromLocal(currentUser);
  console.log(initialTime);

  const [notes, setNotes] = useState(initialNotes);
  const [time, setTime] = useState(initialTime);

  const addNote: AddNote = (newNote) => {
    setNotes([...notes, { id: '', text: newNote, user: currentUser }]);
    console.log(notes);
    setNotesToLocal(currentUser, notes);
  };
  const addTime: AddTime = (newTime) => {
    setTime([...time, Number(newTime)]);
    console.log(time);
    setTimeToLocal(currentUser, time);
  };

  useEffect(() => {
    console.log(match);
    if (!match) {
      console.log('no match');
    } else {
      const userId = match.params.id.slice(2);
      console.log(userId);
      getUser(userId).then((items) => {
        setCurrentUser(items.name);
      });
    }
  }, [match]);

  useEffect(() => {
    setTimeToLocal(currentUser, time);
    setNotesToLocal(currentUser, notes);
  }, [notes, time]);

  return (
    <div>
      <h2>{`Hi ${currentUser}`}</h2>
      <TrackInputForm addNote={addNote} addTime={addTime} />
      {console.log(currentUser, notes, time)}
    </div>
  );
};
