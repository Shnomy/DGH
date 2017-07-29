import styled from 'styled-components';
import TextMedium from '../../../components/TextMedium'

export const EditorWrapper = styled.div`
  border-bottom: 2px solid black;
  grid-area: bar;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  align-items: baseline;
  line-height: 50px;
`;

export const TextWrapper = styled.div`
  flex: 1;
  padding-left: 10px;
  align-items: baseline;
  line-height: 50px;
`;

export const PageText = styled(TextMedium)`
  text-transform: capitalize;
`;
