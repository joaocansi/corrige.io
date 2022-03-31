import Link from 'next/link';
import Logo from 'components/Logo';
import {
  cleanHeaderBackIconAnimation,
  cleanHeaderLogoAnimation,
} from 'utils/animations';
import { motion } from 'framer-motion';
import * as CleanHeaderStyle from 'styles/components/headers/CleanHeaderStyle';

interface CleanHeaderProps {
  previusPage: string;
}

export default function CleanHeader({ previusPage }: CleanHeaderProps) {
  return (
    <CleanHeaderStyle.Container>
      <Link href={previusPage} passHref>
        <a>
          <motion.i
            className="fas fa-arrow-left"
            {...cleanHeaderBackIconAnimation}
          />
        </a>
      </Link>
      <Logo {...cleanHeaderLogoAnimation} />
    </CleanHeaderStyle.Container>
  );
}
