import styled from 'styled-components';

interface ProfileImageProps {
  width: number;
}

const ProfileImage = styled.img<ProfileImageProps>`
  width: ${(props) => (props.width ? `${props.width}px` : 0)};
  height: auto;

  border-radius: 50%;
  cursor: pointer;
`;

export default ProfileImage;
