import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import * as S from './RegistrationForm.style';

const RegistrationForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  return (
    <div>
      <S.RegistrationFormBlock>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Vardas" />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Emeilas" autoComplete="username" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Slaptažodis"
          autoComplete="new-password"
        />
      </S.RegistrationFormBlock>
      <button onClick={() => store.registration(name, email, password)}>Registruotis</button>
    </div>
  );
};

export default observer(RegistrationForm);
