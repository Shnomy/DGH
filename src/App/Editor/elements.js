import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-areas: "bar bar bar"
                       "prev edit up"
                       "prev edit list";
  grid-template-columns: 800px 2fr 1fr;
  grid-template-rows: 50px 200px 1fr;
`;
