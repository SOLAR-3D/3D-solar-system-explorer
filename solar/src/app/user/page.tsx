

import IUser from '../utils/IUser';
const UserPage = ( user : IUser) => {
    return (
      <div>
        <h1>Name: {user.email}</h1>

      </div>
    );
  };