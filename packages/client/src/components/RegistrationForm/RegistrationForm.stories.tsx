import { storiesOf } from '@storybook/react';
import * as React from 'react';
import RegistrationForm from "./RegistrationForm";
storiesOf("RegistrationForm", module)
  .add("registration form", () => (
    <RegistrationForm></RegistrationForm>
  ))
  