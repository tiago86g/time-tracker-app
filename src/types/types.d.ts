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

type Time = any;

type AddNote = (newNote: string) => void;
type AddTime = (newTime: string) => void;
