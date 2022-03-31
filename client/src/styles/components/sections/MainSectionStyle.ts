import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;

  background: radial-gradient(
    200px circle at 20% 40%,
    var(--gray-200) 100%,
    transparent 51%
  );

  @media (max-width: 1090px) {
    padding: 7rem 0;
    background: transparent;
  }
`;

const Content = styled(motion.div)`
  width: 90%;
  max-width: 1400px;

  min-height: calc(100vh - 80px);
  padding: 5rem 0;

  margin: 0 auto;
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 20px;

  background: url(/decorations/decoration.png), url(/decorations/decoration.png);
  background-size: 275px 75px;
  background-repeat: no-repeat;
  background-position: 20% 100%, 100% 10%;

  @media (max-width: 1090px) {
    background: transparent;
    flex-direction: column;
  }
`;

const Information = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 15px;
  align-items: flex-start;

  @media (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 620px) {
    align-items: flex-start;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  max-width: 800px;

  @media (max-width: 1470px) {
    max-width: 550px;
  }
`;

const Title = styled(motion.h4)`
  color: var(--gray-900);
  font-size: var(--text-6xl);
  line-height: 100%;
  text-transform: uppercase;

  @media (max-width: 1470px) {
    font-size: var(--text-4xl);
  }

  @media (max-width: 1090px) {
    font-size: var(--text-3xl);
    text-align: center;
  }

  @media (max-width: 620px) {
    text-align: left;
  }
`;

const Description = styled(motion.p)`
  color: var(--gray-600);
  font-size: var(--text-md);
  font-weight: 300;

  @media (max-width: 1090px) {
    text-align: center;
    padding: 0 4rem;
  }

  @media (max-width: 620px) {
    text-align: left;
    padding: 0;
  }
`;

const Button = styled(motion.button)`
  border: 0;
  background: var(--green-200);
  color: var(--white);
  padding: 1.5rem 2.5rem;
  font-size: var(--text-sm);
  font-weight: 300;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--green-300);
  }
`;

export { Container, Content, Image, Title, Description, Information, Button };
