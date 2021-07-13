import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import * as S from './Profile.style';

const LoginForm: FC = () => {
  const { store } = useContext(Context);

  return (
    <S.ProfileBlock>
      <S.CloseButton onClick={() => store.setProfile(false)}>x</S.CloseButton>
      <h2>{store.isAuth ? `Vartotojas autorizuotas ${store.user.email}` : 'AUTORIZUOKITĖS'}</h2>
      <h2>{store.user.isActivated ? 'Vartotojas patvirtintas (emeilas)' : 'PATVIRTINKITE SAVO EMEILĄ!!!!'}</h2>
    </S.ProfileBlock>
  );
};

export default observer(LoginForm);
