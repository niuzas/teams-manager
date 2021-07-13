import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Profile from "./Profile";
storiesOf("Profile", module)
  .add("profile", () => (
    <Profile></Profile>
  ))
  