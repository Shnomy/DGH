import styled from "styled-components";
import Menu from "../../../common/SubMenu";

export const OuterWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f7f7f7;
`;

export const ContentWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 1.5% 6% 6% 6%;
  border: 1px solid grey;
  min-height: 600px;
  width: 100%;
  flex: 1;
`;

export const SubMenu = styled(Menu)`
  flex: 0;
  transition: left 0.5s;

  @media (max-width: 768px) {
    left: ${({ showMenu }) => (showMenu ? "0px" : "-100%")};
    position: fixed;
    top: 0;
    z-index: 10000;
    min-width: 50%;
    max-width: 80%;
  }
`;
