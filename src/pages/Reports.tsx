import React, { useState } from 'react';

const data = [
  {
    id: '79499368-49f0-420a-8476-bae69bab53e5',
    text: 'ch1',
    user: 'Chelsey Dietrich',
    hour: 1,
  },
  {
    id: '6d4ad23d-e04b-4e7b-842f-65fc97d2be69',
    text: 'Er4',
    user: 'Ervin Howell',
    hour: 4,
  },
];

const timeData = [
  {
    id: '175dc105-8b09-4765-98d8-af15fd4e51d8',
    hour: 1,
    user: 'Chelsey Dietrich',
  },
  { id: '29eacad0-0a7d-44d1-8f34-84af9ea91cfd', hour: 4, user: 'Ervin Howell' },
];

interface Props {
  users: any;
}

export const Reports: React.FC<Props> = () => {
  // console.log('location.state', users);
  // console.log(Array.isArray(users));
  const [users, setUsers] = useState([]);
  // console.log(typeof users);

  return (
    <div>
      <h2>All reports will come here</h2>
      {users && users !== [] ? (
        users.map((user: string) =>
          data.filter((item) =>
            user === item.user ? (
              <>
                <p>{item.text}</p>
                <p>{item.hour}</p>
              </>
            ) : (
              <p>{`No items ${user}`}</p>
            ),
          ),
        )
      ) : (
        <p>No users!</p>
      )}
    </div>
  );
};
