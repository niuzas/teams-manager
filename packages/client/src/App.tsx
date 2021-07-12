import { FC, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import Loader from './components/Loader/Loader';
import { Context } from './index';
import * as P from './pages';
// import Routes from './Routes';

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (store.isLoading) {
    return <Loader></Loader>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <P.Home></P.Home>
      </div>
    );
  }

  return <P.Dashboard></P.Dashboard>;
};

export default observer(App);
