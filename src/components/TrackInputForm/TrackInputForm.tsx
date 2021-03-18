import React, { ChangeEvent, FormEvent, useState } from 'react';
import './TrackInputForm.css';
import { AddNote, AddTime } from '../../types/types';

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
    if (!newNote || !newTime) {
      alert('Please insert a note and a time');
    } else {
      addNote(newNote);
      addTime(newTime);
      setNewNote('');
      setNewTime('');
    }
  };
  return (
    <div className="TrackInputForm_container">
      <form>
        <div className="TrackInputForm_input-container">
          <input
            type="number"
            name="time"
            autoComplete="off"
            value={newTime}
            onChange={handleTimeChange}
            required
          />
          <label htmlFor="time" className="TrackInputForm_label-name">
            <span className="TrackInputForm_content-name">
              Insert your hours
            </span>
          </label>
        </div>
        <div className="TrackInputForm_input-container">
          <input
            type="text"
            name="note"
            autoComplete="off"
            value={newNote}
            onChange={handleNoteChange}
            required
          />
          <label htmlFor="note" className="TrackInputForm_label-name">
            <span className="TrackInputForm_content-name">Leave a note</span>
          </label>
        </div>
        <div className="TrackInputForm_button-container">
          <button
            className="TrackInputForm_button"
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
