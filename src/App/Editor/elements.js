import styled from 'styled-components';

export const EditorInput = styled.textarea`
  width: 100%;
  height: 94.9%;
`;

export const SaveButton = styled.div`
  border: 2px solid black;
  &:hover {
    cursor: pointer;
    background-color: orange;
  }
  padding: 10px;
  text-align: center;
  background-color: red;
`;

export const EditorWrapper = styled.div`
  flex: 1;
`;
