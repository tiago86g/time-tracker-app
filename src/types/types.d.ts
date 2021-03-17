import { UsersState } from '../context/UsersContext';
type UsersStateType = typeof initalState;

type AddNote = (newNote: string) => void;
type AddTime = (newTime: string) => void;

type Users = {
  id: number;
  name: string;
  username: string;
};

type Note = {
  id: string;
  text: string;
  user: string | null;
};

// type Time = any;
// type Note = any;

type Time = {
  id: string;
  hour: number;
  user: string | null;
};
