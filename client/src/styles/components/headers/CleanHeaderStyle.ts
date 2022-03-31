import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.header`
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    font-size: 4em;
    color: var(--gray-800);
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export { Container };
