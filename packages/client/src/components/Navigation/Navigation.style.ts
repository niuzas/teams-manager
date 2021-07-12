import styled from "styled-components";

export const NavigationWrapper = styled.div`
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
 
`;

export const NavigationBlock = styled.header`
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

export const LinksBlock = styled.nav`
  margin-top: 0.5rem;
  display:flex;
  flex-direction: row;
`;

export const StyledLink = styled.button`
  color: #868686;
  display: block;
  font-size: 0.8rem;
  padding: 0.2rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  border: none;
  &:hover {
  background-color: darkgray;
  color: white;
  cursor: pointer;
  }
`;
