import styled from 'styled-components';
import TextMedium from '../../../components/TextMedium';

export const ModalWrapper = styled.div`
  background-color: white;
  position: fixed;
  width: 800px;
  left: 0;
  right: 0;
  top: 100px;
  margin: 0 auto;
  z-index: 2;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 75px;
  border-bottom: 1px solid black;
    text-align: center;
`;

export const StyledText = styled(TextMedium)`
  line-height: 75px;
`;

export const Content = styled.div`
  display: flex;
`;
