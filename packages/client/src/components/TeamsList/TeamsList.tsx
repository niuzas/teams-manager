import React, { FC, useState, useEffect } from 'react';

import TeamService from '../../services/TeamService';
import { ITeam } from '../../models/ITeam';
import { observer } from 'mobx-react-lite';
import TeamCard from '../TeamCard/TeamCard';

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
  useEffect(() => {
    getTeams();
  }, []);

  return (
    <S.TeamsListBlock>
      {teams
        .sort((a, b) => b.score - a.score)
        .map((team) => (
          <TeamCard key={team._id} logo={team.logo} title={team.title} score={team.score} _id={team._id}></TeamCard>
        ))}
    </S.TeamsListBlock>
  );
};

export default observer(TeamsList);
