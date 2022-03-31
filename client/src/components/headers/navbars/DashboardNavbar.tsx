import Link from 'next/link';
import { useRouter } from 'next/router';

import { DashboardHeaderProps } from '../DashboardHeader';
import { NavbarLinkProps } from '../Header';

import * as DashboardNavbarStyle from 'styles/components/headers/navbars/DashboardNavbarStyle';
import { useNavbar } from 'contexts/NavbarContext';
import FlexContainer from 'styles/custom/FlexContainer';

const DashboardNavbarLink = ({
  path,
  actualPath,
  children,
}: NavbarLinkProps) => {
  const { setIsOpened } = useNavbar();

  return (
    <DashboardNavbarStyle.NavbarItem isActive={path === actualPath}>
      <Link href={path} passHref>
        <a onClick={() => setIsOpened((e) => !e)}>{children}</a>
      </Link>
    </DashboardNavbarStyle.NavbarItem>
  );
};

export default function DashboardNavbar({ navigations }: DashboardHeaderProps) {
  const router = useRouter();
  const { isOpened } = useNavbar();

  return (
    <DashboardNavbarStyle.Navbar isOpened={isOpened}>
      <DashboardNavbarStyle.NavbarTitle>
        <i className="fas fa-border-none"></i>
        Dashboard
      </DashboardNavbarStyle.NavbarTitle>

      <FlexContainer $direction="column" $mt={4} $space={20}>
        {navigations.map((item) => {
          return (
            <FlexContainer
              key={`nav-division-${item.name}`}
              $direction="column"
            >
              <DashboardNavbarStyle.NavbarCategoryName>
                {item.name}
              </DashboardNavbarStyle.NavbarCategoryName>
              <DashboardNavbarStyle.NavbarList>
                {item.links.map((item) => {
                  return (
                    <DashboardNavbarLink
                      key={`nav-item-${item.name}`}
                      path={item.path}
                      actualPath={router.pathname}
                    >
                      <i className={item.icon} />
                      {item.name}
                    </DashboardNavbarLink>
                  );
                })}
              </DashboardNavbarStyle.NavbarList>
            </FlexContainer>
          );
        })}
      </FlexContainer>
    </DashboardNavbarStyle.Navbar>
  );
}
