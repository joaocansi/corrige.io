import { motion } from 'framer-motion';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

const Macbook = styled.img`
  width: 100%;
  min-width: 600px;

  @media (max-width: 1090px) {
    max-width: 600px;
    min-width: initial;
  }
`;

const Iphone = styled.img`
  width: 100%;
  min-width: 450px;
  margin-left: -2rem;

  @media (max-width: 1090px) {
    max-width: 450px;
    min-width: initial;
    margin-left: 0;
    margin-top: 3rem;
  }
`;

const EssayModelContainer = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 8rem auto 0;

  display: flex;

  gap: 60px;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const EssayModel = styled.img`
  width: auto;
  height: 93px;
  object-fit: contain;

  opacity: 25%;
  cursor: pointer;

  transition: opacity 0.5s;

  &:hover {
    opacity: 40%;
  }
`;

const ContactInput = styled.input`
  width: 100%;
  border: 1px solid #ececec;
  padding: 2rem;
  font-size: 18px;
  color: var(--gray-800);

  &:focus {
    outline: none;
    border-color: var(--gray-300);
  }
`;

const ContactForm = styled.div`
  width: 90%;
  min-width: 700px;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  resize: none;

  @media (max-width: 1090px) {
    margin-top: 2rem;
    width: 100%;
    min-width: initial;
    padding-left: 0;
  }
`;

const ContactTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #ececec;
  padding: 2rem;
  min-height: 300px;
  font-size: 18px;
  color: var(--gray-800);

  &:focus {
    outline: none;
    border-color: var(--gray-300);
  }
`;

export {
  FlexContainer,
  Macbook,
  Iphone,
  EssayModel,
  EssayModelContainer,
  ContactInput,
  ContactForm,
  ContactTextarea,
};
