import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #f7f7f7;
  display: flex;
  margin-top: 8px;
  border: 1px solid grey;
`
export const FooterContent = styled.div`
  flex: 1;
  text-align: center;
  margin: auto;
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
