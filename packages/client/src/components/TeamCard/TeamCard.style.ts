import styled, { StyledFunction } from "styled-components";

export const TeamCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border: 1px solid gray;
`;

export const TeamLogo = styled.img`
  width: 200px;
`;

export const TeamTitle = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 600;
  color: #504f54;
  margin-top: 1em;
`;

export const TeamScore = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2em;
  font-weight: 700;
  color: gray;
  margin: 0.5em;
`;

export const VoteBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: darkgray;

  width: 100%;
  height: 50px;
  margin: 0.2em;
`;

export const VoteButton = styled.button`
  color: gray;
  font-size: 2em;
  font-weight: 900;
  height: 100%;
  width: 50%;
  margin: 0.2em;
  border: none;
  &:hover {
    background-color: darkgray;
    color: white;
    cursor: pointer;
  }
`;
