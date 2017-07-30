import styled from 'styled-components';
import NavBarItem from '../../../components/NavBarItem';

export const Wrapper = styled.div`
  background-color: #B5582A;
  display: flex;
  border: 2px solid Black;
`;

export const NavBarItemStyled = styled(NavBarItem)`
  flex: 1;
  @media (max-width: 800px) {
    .text {
      display: none;
    }
  }
`;
