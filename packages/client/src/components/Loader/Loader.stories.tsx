import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Loader from "./Loader";
storiesOf("Loader", module)
  .add("simple circle loader", () => (
    <Loader></Loader>
  ))
  