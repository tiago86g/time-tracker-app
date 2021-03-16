import React, { ChangeEvent, FormEvent, useState } from 'react';

interface TrackInputFormProps {
  addNote: AddNote;
  addTime: AddTime;
}

export const TrackInputForm: React.FC<TrackInputFormProps> = ({
  addNote,
  addTime,
}) => {
  const [newNote, setNewNote] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewNote(e.target.value);
  };
  const handleTimeChange = (e: any) => {
    setNewTime(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addNote(newNote);
    addTime(newTime);
    setNewNote('');
    setNewTime('');
  };
  return (
    <form>
      <div>
        <input
          type="number"
          name="time"
          placeholder="insert your time"
          value={newTime}
          onChange={handleTimeChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="note"
          placeholder="white a note"
          value={newNote}
          onChange={handleNoteChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};
