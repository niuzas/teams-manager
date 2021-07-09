import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  return (
    <div>
      <form>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Vardas" />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Emeilas" autoComplete="username" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Slaptažodis"
          autoComplete="new-password"
        />
      </form>
      <button onClick={() => store.registration(name, email, password)}>Registruotis</button>

      <form>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Emeilas" autoComplete="username" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Slaptažodis" autoComplete="on" />
      </form>
      <button onClick={() => store.login(email, password)}>Prisijungti</button>
    </div>
  );
};

export default observer(LoginForm);
