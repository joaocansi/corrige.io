import { ReactNode } from 'react';
import * as SectionStyle from 'styles/components/sections/SectionStyle';

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  background?: string;
  children: ReactNode;
}

function Section({ id, title, description, children }: SectionProps) {
  return (
    <SectionStyle.Container id={id}>
      <div>
        {title && <SectionStyle.Title>{title}</SectionStyle.Title>}
        {description && (
          <SectionStyle.Description>{description}</SectionStyle.Description>
        )}
      </div>
      <SectionStyle.Content>{children}</SectionStyle.Content>
    </SectionStyle.Container>
  );
}

export default Section;
