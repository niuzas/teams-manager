import React, { FC, useState } from 'react';

import UserService from '../../services/UserService';
import { IUser } from '../../models/IUser';
// import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import * as S from './UsersList.style';

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <S.UsersListBlock>
      <div>
        <button onClick={getUsers}>Vartotojų sarašas</button>
      </div>

      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </S.UsersListBlock>
  );
};

export default observer(UsersList);
