import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const OuterWrapper = styled.div`
  max-width: 250px;
  height: 100%;
  background-color: #f7f7f7;
  flex: 1 1 auto;
  min-height: 640px;
  border-right: 1px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  padding: 10px;
  font-family: sans-serif;
`;

export const MenuText = styled.div`
  width: 100%;
  height: 35px;
  background-color: lightgrey;
  line-height: 35px;
  padding-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: sans-serif;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const InputWrapper = styled.div`display: flex;`;

export const PlussIcon = styled(FontAwesome)`
  flex: 1;
  text-align: center;
  line-height: 50px;
  font-size: 1.75em;
  cursor: pointer;
  :hover {
    color: rgb(48, 48, 48);
  }
`;

export const BackIcon = styled(FontAwesome)`
  flex: 1;
  text-align: center;
  padding-right: 10px;
  :hover {
    color: rgb(48, 48, 48);
  }
`;
