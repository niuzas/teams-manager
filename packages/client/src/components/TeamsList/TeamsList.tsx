import React, { FC, useState } from 'react';

import TeamService from '../../services/TeamService';
import { ITeam } from '../../models/ITeam';
// import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import * as S from './TeamsList.style';

const TeamsList: FC = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  async function getTeams() {
    try {
      const response = await TeamService.fetchTeams();
      setTeams(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  getTeams();
  return (
    <S.TeamsListBlock>
      {teams.map((team) => (
        <div key={team._id}>
          Komanda: {team.title} Taškai: {team.score}
        </div>
      ))}
    </S.TeamsListBlock>
  );
};

export default observer(TeamsList);
