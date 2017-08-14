import styled from "styled-components";
import Menu from "../../../common/SubMenu";

<<<<<<< HEAD
export const ContentWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 1.5% 6% 6% 6%;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  min-height: 600px;
=======
export const ContentPageWrapper = styled.div`
  border: 2px solid black;
  border-top: 0;
  display: flex;
>>>>>>> c2cc21ced9cef30b9bbbb998e3f7a339fe16c82c
  width: 100%;
  background-color: #f7f7f7;
`;

export const SubMenu = styled(Menu)`
  min-width: 17%;
  flex: 0;
  transition: left 0.4s;

  @media (max-width: 1200px) {
    min-width: 25%;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: ${({ show }) => (show ? "0" : "-100%")};
    width: 80%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  margin: 0px 25px;
`;
