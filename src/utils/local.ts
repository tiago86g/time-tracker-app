export const getTimeFromLocal = (userId: any) => {
  const localTime = localStorage.getItem(`${userId}Time`);
  console.log(localTime);
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

// function storageAvailable(type) {
//   var storage;
//   try {
//     storage = window[type];
//     var x = '__storage_test__';
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   } catch (e) {
//     return (
//       e instanceof DOMException &&
//       // everything except Firefox
//       (e.code === 22 ||
//         // Firefox
//         e.code === 1014 ||
//         // test name field too, because code might not be present
//         // everything except Firefox
//         e.name === 'QuotaExceededError' ||
//         // Firefox
//         e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//       // acknowledge QuotaExceededError only if there's something already stored
//       storage &&
//       storage.length !== 0
//     );
//   }
// }

// export const getTimeFromLocal = (userId: string) => {
//   if (storageAvailable('localStorage')) {
//     const localTime = localStorage(`${userId}Time`);
//     return localTime ? JSON.parse(localTime) : [0];
//   } else {
//     return [0];
//   }
// };

// export const getNotesFromLocal = (userId: string) => {
//   if (storageAvailable('localStorage')) {
//     const localTime = localStorage(`${userId}Notes`);
//     return localTime ? JSON.parse(localTime) : [];
//   } else {
//     return [];
//   }
// };

// export const setNotesToLocal = (userId: string, notes: Note[]) => {
//   localStorage.setItem(`${userId}Notes`, JSON.stringify(notes));
// };

// export const setTimeToLocal = (userId: string, time: number[]) => {
//   localStorage.setItem(`${userId}Time`, JSON.stringify(time));
// };
