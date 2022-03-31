import * as MainSectionStyle from 'styles/components/sections/MainSectionStyle';
import Button from 'styles/custom/Button';
import { mainAnimations } from 'utils/animations';

interface MainSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  button?: string;
  to?: string;
}

export default function MainSection({
  id,
  title,
  description,
  image,
  alt,
  button,
  to,
}: MainSectionProps) {
  return (
    <MainSectionStyle.Container id={id}>
      <MainSectionStyle.Content>
        <MainSectionStyle.Information {...mainAnimations}>
          <MainSectionStyle.Title>{title}</MainSectionStyle.Title>
          <MainSectionStyle.Description>
            {description}
          </MainSectionStyle.Description>
          {button && (
            <a href={`#${to}`}>
              <Button
                $fontSize="sm"
                $color="white"
                $background="green-200"
                $backgroundHovered="green-300"
                $horizontalPadding={2}
                $verticalPadding={1.5}
                $radius={15}
              >
                {button}
              </Button>
            </a>
          )}
        </MainSectionStyle.Information>
        <MainSectionStyle.Image {...mainAnimations} src={image} alt={alt} />
      </MainSectionStyle.Content>
    </MainSectionStyle.Container>
  );
}
