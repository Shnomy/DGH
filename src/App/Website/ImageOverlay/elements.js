import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    background-color: black;
  }
  z-index: 100;
`;

export const ImageWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
