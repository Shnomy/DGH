import styled from 'styled-components';
import ImageLoader from '../ImageLoader';

export const ImageStyled = styled(ImageLoader)`
  max-width: 100%;
  object-fit: contain;
  ${props => props.float && props.width !== "100" ? (props.float === "left" ? "margin-right: 0.8rem" : "margin-left: 0.8rem") : null};
  ${props => props.width  ? `width: ${props.width}` : null};
  ${props => props.height ? `height: ${props.height}` : null};
  ${props => props.float && props.width !== "100" ? `float: ${props.float}` : null};
  ${props => props.float && props.width !== "100" ? `display: inline-block` : null};
  ${props => props.border ? `border: ${props.border}` : null};
  ${props => props.borderRadius ? `border-radius: ${props.borderRadius}` : null};
  @media (max-width: 800px) {
    float: none;
    display: block;
    max-height: 300px;
    margin: 0 auto;
    width: auto;
  }
`;
