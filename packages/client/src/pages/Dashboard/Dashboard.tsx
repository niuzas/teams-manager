import { FC, useContext } from 'react';
// import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import UsersList from '../../components/UsersList/UsersList';
import TeamsList from '../../components/TeamsList/TeamsList';

import * as S from './Dashboard.style';

const Dashboard: FC = () => {
  const { store } = useContext(Context);
  return (
    <S.DashboardSection>
      <h1>Dashboard</h1>
      <div>
        <h1>{store.isAuth ? `Vartotojas autorizuotas ${store.user.email}` : 'AUTORIZUOKITĖS'}</h1>
        <h1>{store.user.isActivated ? 'Vartotojas patvirtintas (emeilas)' : 'PATVIRTINKITE SAVO EMEILĄ!!!!'}</h1>

        <TeamsList></TeamsList>

        <UsersList></UsersList>

        <button onClick={() => store.logout()}>Atsijungti</button>
      </div>
    </S.DashboardSection>
  );
};

export default observer(Dashboard);
