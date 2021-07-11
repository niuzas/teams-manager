import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { ITeam } from '../../models/ITeam';

import * as S from './TeamCard.style';

const TeamCard: FC<ITeam> = ({ logo, title, score, _id }) => {
  const { store } = useContext(Context);

  return (
    <S.TeamCardBlock>
      <S.TeamLogo src={logo}></S.TeamLogo>
      <S.TeamTitle>{title}</S.TeamTitle>
      <S.TeamScore>{score}</S.TeamScore>
      <span>{_id}</span>
      <S.VoteBlock>
        <S.VoteButton
          onClick={() => {
            console.log(store.user.id);
          }}
        >
          -
        </S.VoteButton>
        <S.VoteButton onClick={() => store.vote(_id, store.user.id)}>+</S.VoteButton>
      </S.VoteBlock>
    </S.TeamCardBlock>
  );
};

export default observer(TeamCard);
