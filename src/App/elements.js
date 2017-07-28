import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({edit}) => edit ? "0" : "0 auto"};
  max-width: 940px;
  min-height: 100vh;
  ${({edit}) => edit ? "flex:1;" : null}
`;

export const Background = styled.div`
  display: ${({edit}) => edit ? "flex" : "inherit"};
  background-image: url(./images/BG.jpg);
  background-attachment: fixed;
  background-size: cover;
`;
