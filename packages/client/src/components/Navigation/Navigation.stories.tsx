import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Navigation from "./Navigation";
storiesOf("Navigation", module)
  .add("navigation not loged in", () => (
    <Navigation></Navigation>
  ))
  