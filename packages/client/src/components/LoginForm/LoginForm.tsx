import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import * as S from './LoginForm.style';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  return (
    <div>
      <S.LoginFormBlock>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Emeilas" autoComplete="username" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Slaptažodis" autoComplete="on" />
      </S.LoginFormBlock>
      <button onClick={() => store.login(email, password)}>Prisijungti</button>
    </div>
  );
};

export default observer(LoginForm);
