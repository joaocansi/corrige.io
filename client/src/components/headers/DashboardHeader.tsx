import Link from 'next/link';

import ProfilePopup from 'components/popups/ProfilePopup';
import { ReactNode, useState } from 'react';

import * as DashboardHeaderStyle from 'styles/components/headers/DashboardHeaderStyle';
import { NavbarLinkProps } from './Header';
import { useRouter } from 'next/router';
import { useNavbar } from 'contexts/NavbarContext';
import DashboardNavbar from './navbars/DashboardNavbar';
import Icon from 'styles/custom/Icon';
import FlexContainer from 'styles/custom/FlexContainer';

export interface DashboardHeaderProps {
  children?: ReactNode;
  page?: string;
  navigations: DashboardHeaderNavbarProps[];
}

interface DashboardHeaderNavbarProps {
  name: string;
  links: {
    name: string;
    path: string;
    icon: string;
  }[];
}

export default function DashboardHeader({
  children,
  navigations,
  page,
}: DashboardHeaderProps) {
  const [popup, setPopup] = useState(false);
  const { isOpened, setIsOpened } = useNavbar();

  return (
    <DashboardHeaderStyle.Container>
      <DashboardHeaderStyle.Header isOpened={isOpened}>
        <DashboardHeaderStyle.HeaderContent>
          <FlexContainer $align="center">
            <DashboardHeaderStyle.MenuIcon
              color="blue-400"
              colorHovered="blue-500"
              size={42}
              width={42}
              onClick={() => setIsOpened((e) => !e)}
              className={isOpened ? 'fas fa-times' : 'fas fa-bars'}
            />
            <DashboardHeaderStyle.LogoIcon src="/icon.png" alt="Corrige.io" />
          </FlexContainer>
          <DashboardHeaderStyle.ProfileContainer>
            <Link passHref href="/dashboard/student/settings">
              <a>
                <Icon
                  pointer={true}
                  color="blue-400"
                  colorHovered="blue-500"
                  size={26}
                  className="fal fa-cog"
                />
              </a>
            </Link>
            <DashboardHeaderStyle.Profile
              onClick={() => setPopup((e) => !e)}
              src="/vuero-1.svg"
            />
            <ProfilePopup popup={popup} setPopup={setPopup} />
          </DashboardHeaderStyle.ProfileContainer>
        </DashboardHeaderStyle.HeaderContent>
        <DashboardNavbar navigations={navigations} />
      </DashboardHeaderStyle.Header>
      <main>
        <DashboardHeaderStyle.Content>
          <FlexContainer $mt={1.5} $mb={3} $align="center" $space={10}>
            <DashboardHeaderStyle.ContentTitle>
              <Icon
                color="blue-400"
                colorHovered="blue-500"
                size={32}
                width={32}
                mr={1}
                pointer
                onClick={() => setIsOpened((e) => !e)}
                className={isOpened ? 'fas fa-times' : 'fas fa-bars'}
              />
              {page}
            </DashboardHeaderStyle.ContentTitle>
          </FlexContainer>
          {children}
        </DashboardHeaderStyle.Content>
      </main>
    </DashboardHeaderStyle.Container>
  );
}
