import { storiesOf } from '@storybook/react';
import * as React from 'react';
import TeamCard from './TeamCard';
storiesOf('TeamCard', module).add('team card', () => (
  <TeamCard
    logo={'https://www.logoarena.com/contestimages/public_new/9431/59_1549355037_04.png'}
    score={10}
    title="Team 00"
    _id="zzz"
  ></TeamCard>
));
