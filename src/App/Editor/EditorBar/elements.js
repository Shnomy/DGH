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
  line-height: 75px;
  text-align: right;
  padding-right: 25px;
`;

export const TextWrapper = styled.div`
  flex: 1;
  padding-left: 25px;
  align-items: baseline;
  line-height: 75px;
`;

export const PageText = styled(TextMedium)`
  text-transform: capitalize;
`;
