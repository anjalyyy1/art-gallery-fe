import styled from 'styled-components';

export const AppLogo = styled.h1`
  a {
    font-size: 30px;
    font-weight: 700;
    color: ${props => props.theme.COLOR_PALETTE.WHITE};
    text-decoration: none;
    letter-spacing: 5px;
  }
`;

export const HeaderWrapper = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Container = styled.div`
  background-color: ${props => props.theme.COLOR_PALETTE.BLACK};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavWrapper = styled.nav`
  width: 30%;
  display: flex;
`;

export const NavOptions = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    font-size: 16px;
    color: ${props => props.theme.COLOR_PALETTE.WHITE};
    font-weight: bold;
  }
`;
