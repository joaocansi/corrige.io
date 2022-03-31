import { motion } from 'framer-motion';
import styled from 'styled-components';

export const InputContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  padding: 2.5rem;

  input {
    flex: 1;
    border: 0;
    font-size: 16px;
    &:focus {
      outline: 0;
    }
  }
`;
