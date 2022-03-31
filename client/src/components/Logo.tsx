import { LogoContainer } from 'styles/components/LogoStyle';
import { BasicMotionProps } from './mockups/withAnimation';

import Link from 'next/link';

export default function Logo({
  animate,
  transition,
  initial,
}: BasicMotionProps) {
  return (
    <Link href="/">
      <LogoContainer
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <img src="/icon.png" alt="corrige.io" />
        Corrige.<span>io</span>
      </LogoContainer>
    </Link>
  );
}
