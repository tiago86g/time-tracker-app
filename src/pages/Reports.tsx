import React from 'react';

interface ReportsProps {
  users: any;
}

export const Reports: React.FC<ReportsProps> = ({ users }) => {
  return (
    <div className="container">
      <h2>All reports will come here</h2>
      <ul>
        {console.log(users)}
        {users.map(
          (item: {
            id: React.Key | null | undefined;
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <li key={item.id}>
                {/* <Link to={`report_${item.id}`}>
                <span>{item.name}</span>
              </Link> */}
                <p>{item.name}</p>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};
