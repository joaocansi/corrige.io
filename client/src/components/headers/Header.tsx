import { ReactNode } from 'react';
import { useNavbar } from 'contexts/NavbarContext';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Logo from '../Logo';

import * as HeaderStyle from 'styles/components/headers/HeaderStyle';
import Button from 'styles/custom/Button';

export default function Header() {
  const router = useRouter();
  const { isOpened, setIsOpened, toggle } = useNavbar();

  return (
    <HeaderStyle.Container>
      <HeaderStyle.Content>
        <Logo />

        <HeaderStyle.MenuIcon
          className={`fas fa-${isOpened ? 'times' : 'bars'}`}
          onClick={toggle}
          isOpened={isOpened}
        />

        <HeaderStyle.Navbar isOpened={isOpened}>
          <HeaderStyle.NavbarList>
            <NavbarLink actualPath={router.pathname} path="/">
              Início
            </NavbarLink>
            <NavbarLink actualPath={router.pathname} path="/professores">
              Para <span>professores</span>
            </NavbarLink>
            <NavbarLink actualPath={router.pathname} path="/alunos">
              Para <span>alunos</span>
            </NavbarLink>

            <li>
              <Link href="/logar" passHref>
                <a>
                  <Button
                    $color="white"
                    $backgroundHovered="green-300"
                    $background="green-200"
                    $horizontalPadding={4}
                    $verticalPadding={1.5}
                    $radius={5}
                    $fontSize="sm"
                  >
                    Logar
                  </Button>
                </a>
              </Link>
            </li>
          </HeaderStyle.NavbarList>
        </HeaderStyle.Navbar>
      </HeaderStyle.Content>
    </HeaderStyle.Container>
  );
}

export interface NavbarLinkProps {
  path: string;
  children: ReactNode;
  actualPath: string;
}

export const NavbarLink = ({ path, children, actualPath }: NavbarLinkProps) => {
  const { setIsOpened } = useNavbar();

  return (
    <HeaderStyle.NavbarItem isActive={actualPath === path}>
      <Link href={path} passHref>
        <a onClick={() => setIsOpened((e) => !e)}>{children}</a>
      </Link>
    </HeaderStyle.NavbarItem>
  );
};
