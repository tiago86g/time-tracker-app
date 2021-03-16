export const getTimeFromLocal = (userId: any) => {
  const localTime = localStorage.getItem(`${userId}Time`);
  return localTime ? JSON.parse(localTime) : [];
};

export const getNotesFromLocal = (userId: any) => {
  const localNotes = localStorage.getItem(`${userId}Notes`);
  return !localNotes ? [] : JSON.parse(localNotes);
};

export const setNotesToLocal = (userId: any, notes: Note[]) => {
  localStorage.setItem(`${userId}Notes`, JSON.stringify(notes));
};

export const setTimeToLocal = (userId: any, time: number[]) => {
  localStorage.setItem(`${userId}Time`, JSON.stringify(time));
};
