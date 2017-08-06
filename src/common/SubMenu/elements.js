import styled from "styled-components";

export const OuterWrapper = styled.div`
  max-width: 250px;
  height: 100%;
  background-color: #f7f7f7;
  flex: 1;
  min-height: 640px;
  border-right: 1px solid black;
  padding: 10px;
  font-family: sans-serif;
`;

export const MenuText = styled.div`
  width: 100%;
  height: 50px;
  background-color: lightgrey;
  line-height: 50px;
  padding-left: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  font-family: sans-serif;
  &:hover {
    border-bottom: 2px solid black;
  }
`;
