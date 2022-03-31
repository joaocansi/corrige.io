import { ProfilePopupProps } from 'components/popups/ProfilePopup';
import styled from 'styled-components';

const Container = styled.div<ProfilePopupProps>`
  width: 250px;

  position: fixed;
  left: 100px;
  bottom: 20px;

  padding: 2rem;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;

  transition: opacity 0.25s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  z-index: 1000;

  ${(props) =>
    props.popup
      ? {
          opacity: 1,
          visibility: 'visible',
        }
      : {
          opacity: 0,
          visibility: 'hidden',
        }}

  @media (max-width: 1080px) {
    top: calc(80px + 2rem);
    right: 1.5rem;
    left: initial;
    bottom: initial;

    &::before {
      content: '';

      border: 10px solid transparent;
      border-bottom-color: var(--white);

      height: 0;
      width: 0;

      position: absolute;
      top: -20px;
      right: 1.5rem;
    }
  }
`;
const Information = styled.div`
  margin-left: 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h5`
  font-size: 1.65em;
  line-height: 100%;
  color: var(--gray-800);
`;

const Role = styled.p`
  font-size: 1.25em;
  margin-top: 3px;
  color: var(--gray-300);
`;

export { Container, Information, Header, Name, Role };
