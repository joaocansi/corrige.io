import styled from 'styled-components';

const Container = styled.footer`
  background-color: var(--white);
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4rem 0;
`;

const Copyright = styled.p`
  color: var(--gray-600);
  font-size: var(--text-sm);
  font-weight: 300;
`;

export { Container, Content, Copyright };
