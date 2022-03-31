import styled from 'styled-components';
import Icon from 'styles/custom/Icon';
import { DashboardHeaderProps } from '../DashboardHeaderStyle';
import { HeaderNavbarItemProps } from '../HeaderStyle';

const Navbar = styled.nav<DashboardHeaderProps>`
  width: 290px;
  height: 100vh;
  background: var(--gray-100);

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  position: absolute;

  top: 0;
  left: -290px;

  padding: 2rem;
  transition: left 0.5s;

  ${(props) =>
    props.isOpened
      ? {
          left: '80px',
        }
      : {}}

  @media (max-width: 1186px) {
    height: calc(100vh - 80px);
    top: 80px;

    ${(props) =>
      props.isOpened
        ? {
            left: '0px',
          }
        : {}}
  }
`;

const NavbarTitle = styled.h6`
  font-size: var(--text-lg);
  text-transform: uppercase;

  margin-top: -0.25rem;
  color: var(--gray-300);

  cursor: pointer;

  i {
    margin-right: 0.75rem;
  }
`;

const NavbarCategoryName = styled.p`
  font-size: var(--text-sm);
  font-weight: 300;

  border-bottom: 1px solid var(--gray-300);
  color: var(--gray-300);
`;

const NavbarList = styled.ul`
  list-style: none;

  margin-top: 2rem;
  margin-left: 1rem;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const NavbarItem = styled.li<HeaderNavbarItemProps>`
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 300;

  color: var(--blue-400);

  a {
    text-decoration: none;
  }

  i {
    width: 30px;
    text-align: center;
    margin-right: 0.5rem;
  }

  transition: filter 0.2s;
  cursor: pointer;

  ${(props) =>
    props.isActive
      ? {
          filter: 'brightness(.8)',
        }
      : {}}
  filter: ${(props) => (props.isActive ? 'brightness(.8)' : 'brightness(1)')};

  &:hover {
    filter: brightness(0.8);
  }
`;

export { Navbar, NavbarCategoryName, NavbarItem, NavbarList, NavbarTitle };
