import styled from 'styled-components';
import FlexContainer from 'styles/custom/FlexContainer';
import Icon from 'styles/custom/Icon';

export interface DashboardHeaderProps {
  isOpened?: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: min-content 1fr;

  @media (max-width: 1186px) {
    display: flex;
    flex-direction: column;
  }
`;

const Content = styled.div`
  max-width: 1100px;
  padding: 0 2.5rem;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;
`;

const ContentTitle = styled.h6`
  width: 100%;
  font-size: 32px;
  font-weight: 300;
  color: var(--blue-400);

  @media (max-width: 1186px) {
    i {
      display: none;
    }
  }
`;

const MenuIcon = styled(Icon)`
  display: none;
  cursor: pointer;

  @media (max-width: 1186px) {
    display: initial;
  }
`;

const HeaderContent = styled.div`
  width: 80px;
  height: 100vh;

  background-color: var(--white);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
  justify-content: space-between;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  position: initial;

  z-index: 100;
  position: absolute;

  @media (max-width: 1186px) {
    width: 100%;
    height: 80px;

    flex-direction: row;
    justify-content: space-between;

    margin: 0 auto;
    box-shadow: none;

    padding: 1rem 1.5rem;
    position: initial;
  }
`;

const Header = styled.header<DashboardHeaderProps>`
  width: ${(props) => (props.isOpened ? 'calc(80px + 290px)' : '80px')};
  transition: width 0.5s;

  position: relative;

  @media (max-width: 1186px) {
    width: 100%;
    height: 80px;

    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
`;

const LogoIcon = styled.img`
  width: 60px;
  cursor: pointer;

  @media (max-width: 1186px) {
    display: none;
  }
`;

const Profile = styled.img`
  cursor: pointer;
  width: 50px;
`;

const ProfileContainer = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 1186px) {
    flex-direction: row;
  }
`;

export {
  Container,
  Content,
  Header,
  LogoIcon,
  Profile,
  HeaderContent,
  ContentTitle,
  ProfileContainer,
  MenuIcon,
};
