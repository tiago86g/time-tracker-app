export const getUsers = () => {
  const url: string = `https://jsonplaceholder.typicode.com/users/`;
  return fetch(url).then((data) => data.json());
};

export const getUser = (userId: string) => {
  const url: string = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return fetch(url).then((data) => data.json());
};
