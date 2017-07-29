import styled from 'styled-components';
import ImageLoader from '../../../common/ImageLoader';

export const ImageListWrapper = styled.div`
  background-color: #f7f7f7;
  border-left: 1px dashed black;
  grid-area: list;
`;

export const StyledImage = styled(ImageLoader)`
  max-width: 200px;
  max-height: 200px;
`;
