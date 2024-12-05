import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpened ? "250px" : "80px")};
  height: 100vh;
  background-color: ${(props) => props.theme.sidebarBg};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease, background-color 0.3s ease;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  img {
    width: ${(props) => (props.isOpened ? "40px" : "30px")};
    transition: width 0.3s ease;
  }
  span {
    opacity: ${(props) => (props.isOpened ? 1 : 0)};
    visibility: ${(props) => (props.isOpened ? "visible" : "hidden")};
    width: ${(props) => (props.isOpened ? "100%" : 0)};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    color: ${(props) => props.theme.logoColor};
    margin-left: 10px;
  }
`;

export const RouteWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const RouteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.isActive ? props.theme.buttonBgActive : props.theme.buttonBgDefault)};

  &:hover {
    background-color: ${(props) => props.theme.sidebarHover};
  }

  &:active {
    background-color: ${(props) => props.theme.buttonBgActive};
  }

  svg {
    transform: translateX(${(props) => (props.isOpened ? "0" : "50%")})
  }

  span {
    margin-left: 10px;
    display: ${(props) => (props.isOpened ? "inline" : "none")};
  }
  transition: all 0.3s ease;
`;

