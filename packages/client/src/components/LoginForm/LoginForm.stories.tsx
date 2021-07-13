import { storiesOf } from '@storybook/react';
import * as React from 'react';
import LoginForm from "./LoginForm";
storiesOf("LoginForm", module)
  .add("login form", () => (
    <LoginForm></LoginForm>
  ))
  