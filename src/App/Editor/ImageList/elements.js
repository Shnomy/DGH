import styled from 'styled-components';
import ImageLoader from '../../../common/ImageLoader';

export const ImageListWrapper = styled.div`
  background-color: yellow;
  grid-area: list;
`;

export const StyledImage = styled(ImageLoader)`
  max-width: 200px;
  max-height: 200px;
`;
