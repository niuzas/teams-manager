import styled from 'styled-components';

export const TeamCardBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: lightgray;
border: 1px solid gray;

`;

export const TeamLogo =styled.img``;

export const TeamTitle=styled.span`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1.5em;
color: gray;
`;

export const TeamScore=styled.span`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 2em;
font-weight: 700;
color: gray;
`;

export const VoteBlock = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
background-color: lightgray;
width: 100%;
height: 50px;

`;

export const VoteButton = styled.button`
color: gray;
font-size: 2em;
font-weight: 900;
height: 100%;
width: 50%;


`