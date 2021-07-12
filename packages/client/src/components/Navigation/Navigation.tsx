import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';

import * as S from './Navigation.style';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Profile from '../Profile/Profile';

const Navigation: FC = () => {
  const { store } = useContext(Context);

  if (!store.isAuth) {
    return (
      <>
        <S.NavigationWrapper>
          <S.NavigationBlock>
            <S.LinksBlock>
              <S.StyledLink onClick={() => store.setLogin(true)}>Prisijungti</S.StyledLink>
              <S.StyledLink onClick={() => store.setRegistration(true)}>Registruotis</S.StyledLink>
            </S.LinksBlock>
          </S.NavigationBlock>
        </S.NavigationWrapper>
        {store.isLogin && <LoginForm></LoginForm>}
        {store.isRegistration && <RegistrationForm></RegistrationForm>}
      </>
    );
  }

  return (
    <>
      <S.NavigationWrapper>
        <S.NavigationBlock>
          <S.LinksBlock>
            <S.StyledLink onClick={() => store.setProfile(true)}>Profilis</S.StyledLink>
            <S.StyledLink onClick={() => store.logout()}>Atsijungti</S.StyledLink>
          </S.LinksBlock>
        </S.NavigationBlock>
      </S.NavigationWrapper>
      {store.isProfile && <Profile></Profile>}
    </>
  );
};

export default observer(Navigation);
