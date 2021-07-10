import { FC, useContext, useEffect } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';

import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import UsersList from './components/UsersList/UsersList';
import Loader from './components/Loader/Loader';
import { Context } from './index';
import { AuthResponse } from './models/AuthResponse';

import { API_AUTH } from './api';

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    async function checkAuth() {
      store.setLoading(true);
      try {
        const response = await axios.get<AuthResponse>(`${API_AUTH}/refresh`, { withCredentials: true });
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

  if (store.isLoading) {
    return <Loader></Loader>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
        <RegistrationForm />
      </div>
    );
  }

  return (
    <div>
      <h1>{store.isAuth ? `Vartotojas autorizuotas ${store.user.email}` : 'AUTORIZUOKITĖS'}</h1>
      <h1>{store.user.isActivated ? 'Vartotojas patvirtintas (emeilas)' : 'PATVIRTINKITE SAVO EMEILĄ!!!!'}</h1>

      <UsersList></UsersList>

      <button onClick={() => store.logout()}>Atsijungti</button>
    </div>
  );
};

export default observer(App);
