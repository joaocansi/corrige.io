import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LogoContainer = styled(motion.h1)`
  font-size: var(--text-2xl);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--gray-800);
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    color: var(--gray-300);
  }

  img {
    width: 1.5em;
  }
`;
