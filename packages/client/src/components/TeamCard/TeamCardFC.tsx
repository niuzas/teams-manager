import React, { FC, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import { Context } from '../../index';
import { ITeam } from '../../models/ITeam';

import * as S from './TeamCard.style';




const TeamCard: FC<ITeam> = ({ logo, title, score, _id }) => {
  const { store } = useContext(Context);
  const [teamScore, setTeamScore] = useState(score);

  return (
    <S.TeamCardBlock>
      <S.TeamLogo src={logo}></S.TeamLogo>
      <S.TeamTitle>{title}</S.TeamTitle>
      <S.TeamScore>{teamScore}</S.TeamScore>
      {/* <span>{_id}</span> */}
      <S.VoteBlock>
        <S.VoteButton
          onClick={async (e) => {
            const target = e.target as HTMLElement;
            console.log('classList:', target.classList);
            console.log('style:', target.style);
            const result = await store.votePlus(_id, store.user.id);
            if (result.allok) setTeamScore(teamScore + 1);
          }}
        >
          +
        </S.VoteButton>
        <S.VoteButton
          onClick={async (e) => {
            const result = await store.voteMinus(_id, store.user.id);
            if (result.allok) setTeamScore(teamScore - 1);
          }}
        >
          -
        </S.VoteButton>
      </S.VoteBlock>
    </S.TeamCardBlock>
  );
};


export default observer(TeamCard);
