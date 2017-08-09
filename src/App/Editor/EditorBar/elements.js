import styled from "styled-components";
import TextMedium from "../../../components/TextMedium";
import Button from "../../../components/Button";

export const EditorWrapper = styled.div`
  border-bottom: 2px solid black;
  grid-area: bar;
  display: flex;
  font-family: sans-serif;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  align-items: baseline;
  line-height: 75px;
  text-align: right;
  padding-right: 25px;
`;

export const TextWrapper = styled.div`
  flex: 1;
  align-items: baseline;
  line-height: 75px;
`;

export const PageText = styled(TextMedium)`
  text-transform: capitalize;
`;

export const TitleInput = styled.input`
  height: 60%;
  padding: 12px 20px;
  margin: 8px 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledButton = styled(Button)`

  height: 60%;
  padding: 12px 20px;
  margin: 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px
`;
