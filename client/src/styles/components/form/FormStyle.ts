import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: number;
}

const Container = styled.form<ContainerProps>`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : '700px')};

  margin: 0 2rem;

  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const Title = styled(motion.h2)`
  color: var(--gray-800);
  text-transform: uppercase;
  text-align: center;
  font-size: var(--text-3xl);
`;

export { Container, Title };
