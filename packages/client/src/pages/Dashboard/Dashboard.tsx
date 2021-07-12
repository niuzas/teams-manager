import { FC, useContext, useEffect } from 'react';
// import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import UsersList from '../../components/UsersList/UsersList';
import TeamsList from '../../components/TeamsList/TeamsList';
import Navigation from '../../components/Navigation/Navigation';

import * as S from './Dashboard.style';

const Dashboard: FC = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  return (
    <S.DashboardSection>
      <Navigation></Navigation>

      <div>
      

        <TeamsList></TeamsList>

        {/* <UsersList></UsersList> */}

      
      </div>
    </S.DashboardSection>
  );
};

export default observer(Dashboard);
