import styled from 'styled-components';

export interface HeaderNavbarItemProps {
  isActive?: boolean;
}

export interface HeaderNavbarProps {
  isOpened?: boolean;
}

const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  width: 95%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = styled.nav<HeaderNavbarProps>`
  @media (max-width: 1100px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    transform: ${(props) => (props.isOpened ? `scaleX(1)` : `scaleX(0)`)};
    transform-origin: top left;
    transition: transform 0.5s;
    z-index: 1000;
  }
`;

const MenuIcon = styled.i<HeaderNavbarProps>`
  color: var(--gray-800);
  font-size: 38px;
  display: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1100px) {
    display: initial;
    z-index: 1001;
    ${(props) =>
      props.isOpened
        ? {
            position: 'fixed',
            right: '30px',
          }
        : {}}
  }
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1100px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;

const NavbarItem = styled.li<HeaderNavbarItemProps>`
  font-size: var(--text-sm);
  color: var(--gray-800);
  text-transform: uppercase;
  position: relative;
  border-bottom: ${(props) =>
    props.isActive ? '3px solid var(--gray-800);' : ''};
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    background: var(--gray-800);
    transform: scaleX(0);
    transition: transform 0.35s 0.2s;
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  a {
    text-decoration: none;
  }

  span {
    font-weight: 700;
  }
`;

export { Container, Content, Navbar, MenuIcon, NavbarList, NavbarItem };
