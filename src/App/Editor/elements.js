import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;

  grid-template-areas: "bar bar bar" "prev edit up" "prev edit list";
  grid-template-columns: 800px 1fr 200px;
  grid-template-rows: 75px 200px 1fr;
`;

export const Faded = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;
