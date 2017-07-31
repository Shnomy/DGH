import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 8px;
  border: 1px solid grey;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 8px;
    padding: 0.7rem 6% 1.5rem 6%;
  }
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`
export const FooterContent = styled.div`
  text-align: center;
  margin: auto 0;
`;

export const Text = styled.p`
  line-height: 0.5em;
`
export const Link = styled.a`
  line-height: 0.5em;
  text-decoration: none;
  &:visited {
    color: blue;
  }
`
