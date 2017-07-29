import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  overflow: hidden;
  grid-template-areas: "bar bar bar"
                       "prev edit up"
                       "prev edit list";
  grid-template-columns: 800px 1fr 200px;
  grid-template-rows: 50px 200px 1fr;
`;
