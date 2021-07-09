import React, { FC, useContext, useState } from 'react';
import { Context } from '../index';
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
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Emeilas" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Slaptažodis" />
      </form>
      <button onClick={() => store.registration(name, email, password)}>Registruotis</button>

      <form>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Emeilas" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Slaptažodis" />
      </form>
      <button onClick={() => store.login(email, password)}>Prisijungti</button>
    </div>
  );
};

export default observer(LoginForm);
