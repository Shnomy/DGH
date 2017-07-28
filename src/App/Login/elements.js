import styled from 'styled-components';

export const ButtonStyling = styled.div`
  border: 2px solid black;
  &:hover {
    cursor: pointer;
    background-color: orange;
  }
  padding: 10px;
  flex: 1;
  text-align: center;
  background-color: red;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`
