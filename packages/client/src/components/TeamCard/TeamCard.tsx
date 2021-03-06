import React, { FC, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import { Context } from '../../index';
import { ITeam } from '../../models/ITeam';

import * as S from './TeamCard.style';

// type TeamCardProps = {
//   title: string;
//   logo: string;
//   score: number;
//   _id: string;
// };

type TeamCardProps = ITeam;

const TeamCard = ({ logo, title, score, _id }: TeamCardProps) => {
  const { store } = useContext(Context);
  const [teamScore, setTeamScore] = useState(score);
  const [voted, setVoted] = useState(false);

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
            if (result.allok) {
              setTeamScore(teamScore + 1);
              setVoted(true);
            }
          }}
        >
          +
        </S.VoteButton>
        <S.VoteButton
          onClick={async (e) => {
            const result = await store.voteMinus(_id, store.user.id);
            if (result.allok) {
              setTeamScore(teamScore - 1);
              setVoted(true);
            }
          }}
        >
          -
        </S.VoteButton>
      </S.VoteBlock>
    </S.TeamCardBlock>
  );
};

TeamCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  score: PropTypes.number,
  _id: PropTypes.string,
};

TeamCard.defaultProps = {
  logo: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30161640/1329-768x591.png',
  title: 'TeamDefault',
};

export default observer(TeamCard);
