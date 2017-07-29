import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 60px;
  text-align: center;
  margin: auto;
  &:hover{
    background-color: #b07551;
    cursor: pointer;
  }
`;

export const Text = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.current ? "Black" : "White" };
  font-family: sans-serif;
  line-height: 60px;
`;

export const NavBarText = styled.span`

`;
