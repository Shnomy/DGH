import styled from 'styled-components';
import ImageLoader from '../../../common/ImageLoader';

export const ImageListWrapper = styled.div`
  background-color: #f7f7f7;
  border-left: 1px dashed black;
  grid-area: list;
  text-align: center;
`;

export const StyledImage = styled(ImageLoader)`
  max-width: 90%;
  max-height: 200px;
  object-fit: contain;
  margin: 5%;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
