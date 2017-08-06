import styled from "styled-components";

export const OuterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: lightgrey;
  line-height: 50px;
  padding-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  font-family: sans-serif;
  &:hover {
    border-bottom: 2px solid black;
  }
`;
