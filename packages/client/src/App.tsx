import React, { FC, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';

import LoginForm from './components/LoginForm/LoginForm';
import Loader from './components/Loader/Loader';
import UserService from './services/UserService';
import { Context } from './index';
import { AuthResponse } from './models/response/AuthResponse';
import { IUser } from './models/IUser';
import { API_URL } from './api';

const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function checkAuth() {
      store.setLoading(true);
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);
        store.setAuth(true);
        store.setUser(response.data.user);
      } catch (e) {
        console.log(e.response?.data?.message);
      } finally {
        store.setLoading(false);
      }
    }
    if (localStorage.getItem('token')) {
      checkAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return <Loader></Loader>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
        <button onClick={getUsers}>Vartotojų sarašas</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{store.isAuth ? `Vartotojas autorizuotas ${store.user.email}` : 'AUTORIZUOKITĖS'}</h1>
      <h1>{store.user.isActivated ? 'Vartotojas patvirtintas (emeilas)' : 'PATVIRTINKITE SAVO EMEILĄ!!!!'}</h1>
      <button onClick={() => store.logout()}>Atsijungti</button>
      <div>
        <button onClick={getUsers}>Vartotojų sąrašas</button>
      </div>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
};

export default observer(App);
