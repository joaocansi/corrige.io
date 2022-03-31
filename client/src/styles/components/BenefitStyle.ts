import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  width: 90%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Description = styled.p`
  color: var(--gray-300);
  font-size: var(--text-sm);
  font-weight: 300;
  text-align: center;
`;

const Icon = styled.i`
  font-size: 11.25em;
  color: var(--blue-400);
`;

export { Container, Description, Icon };
