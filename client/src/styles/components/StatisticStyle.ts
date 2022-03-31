import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 250px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  cursor: pointer;
`;

const Label = styled.p`
  font-size: var(--text-md);
  color: var(--gray-300);
  text-align: center;
`;

const Value = styled.span`
  color: var(--blue-400);
  font-size: 6em;
`;

export { Label, Container, Value };
