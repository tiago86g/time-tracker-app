import { Note, Time } from '../types/types';

export const getTimeFromLocal = (currentUser: string) => {
  const localTime = localStorage.getItem(`${currentUser}_times`);
  return localTime ? JSON.parse(localTime) : [];
};

export const getNotesFromLocal = (currentUser: string) => {
  const localNotes = localStorage.getItem(`${currentUser}_notes`);
  return !localNotes ? [] : JSON.parse(localNotes);
};

export const setNotesToLocal = (currentUser: string, notes: Note[]) => {
  localStorage.setItem(`${currentUser}_notes`, JSON.stringify(notes));
};

export const setTimeToLocal = (currentUser: string, time: Time[]) => {
  localStorage.setItem(`${currentUser}_times`, JSON.stringify(time));
};
