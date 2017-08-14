import styled from "styled-components";

export const OuterWrapper = styled.div`
  height: 45px;
  background-color: #b5582a;
  color: #f7f7f7;
  line-height: 45px;
  padding-left: 10px;
  margin: 10px;
  ${({ isTitle }) =>
    isTitle
      ? "background-color: red; font-weight: bold; font-size: 1.2rem;"
      : ""};
  cursor: pointer;
  font-family: sans-serif;
  border-radius: 3px;
  ${({ current }) =>
    current
      ? `border-bottom: 2px solid black;
         background-color: #b07551;`
      : ""} &:hover {
    border-bottom: 2px solid black;
    background-color: #b07551;
  }
`;
