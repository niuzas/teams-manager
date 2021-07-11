import { FC } from 'react';
// import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import * as S from './Home.style';

const Home: FC = () => {
  return (
    <S.HomeSection>
      <h1>Sveiki! Registruokitės arba prisijunkite!</h1>
      <LoginForm></LoginForm>
      <br></br>
      <RegistrationForm></RegistrationForm>
    </S.HomeSection>
  );
};

export default observer(Home);
