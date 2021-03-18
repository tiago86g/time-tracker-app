import { Note, Time } from '../types/types';

export const getTimesFromLocal = (currentUser: string) => {
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

export const setTimesToLocal = (currentUser: string, times: Time[]) => {
  localStorage.setItem(`${currentUser}_times`, JSON.stringify(times));
};

// export const setUsersToLocal = (users: []) => {
//   localStorage.setItem('users', JSON.stringify(users));
// };

// export const setUsersToLocal = (item: string) => {
//   const usersFromLocal = localStorage.getItem(item);
//   return !usersFromLocal ? [] : JSON.parse(usersFromLocal);
// };
