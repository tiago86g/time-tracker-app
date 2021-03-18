import { UsersState } from '../context/UsersContext';
type UsersStateType = typeof initalState;

type AddNote = (newNote: string) => void;
type AddTime = (newTime: string) => void;

type User = {
  id: number;
  name: string;
  username: string;
};

type Note = {
  id: string;
  text: string;
  user: string | null;
};

// type Time = number;
// type Note = any;

type Time = {
  id: string;
  hour: number | null;
  user: string | null;
};
