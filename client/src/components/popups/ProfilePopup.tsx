import * as ProfilePopupStyle from 'styles/components/popups/ProfilePopupStyle';
import { Dispatch, Ref, SetStateAction, useEffect, useRef } from 'react';
import ProfileImage from 'styles/custom/ProfileImage';
import Button from 'styles/custom/Button';

export interface ProfilePopupProps {
  popup: boolean;
  setPopup?: Dispatch<SetStateAction<boolean>>;
}

export default function ProfilePopup({ popup, setPopup }: ProfilePopupProps) {
  const popupRef = useRef(null);

  useEffect(() => {
    const outsideClick = (e) => {
      if (popup && popupRef.current && !popupRef.current.contains(e.target)) {
        setPopup(false);
      }
    };
    document.addEventListener('click', outsideClick);

    return () => {
      document.removeEventListener('click', outsideClick);
    };
  }, [popup]);

  return (
    <ProfilePopupStyle.Container ref={popupRef} popup={popup}>
      <ProfilePopupStyle.Header>
        <ProfileImage src="/vuero-1.svg" alt="user" width={80} />
        <ProfilePopupStyle.Information>
          <ProfilePopupStyle.Name>Marcos Alexandro</ProfilePopupStyle.Name>
          <ProfilePopupStyle.Role>@Aluno</ProfilePopupStyle.Role>
        </ProfilePopupStyle.Information>
      </ProfilePopupStyle.Header>
      <div>
        <Button
          $radius={5}
          $verticalPadding={1.5}
          $backgroundHovered="green-500"
          $color="white"
          $background="green-400"
          $extends={true}
        >
          <i className="fas fa-sign-out"></i>
          Logout
        </Button>
      </div>
    </ProfilePopupStyle.Container>
  );
}
