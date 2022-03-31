import { GetServerSideProps } from 'next';
import { FormEvent, useState } from 'react';

import { AuthSection } from 'styles/components/sections/AuthSectionStyle';
import { formAnimations } from 'utils/animations';

import CleanHeader from 'components/headers/CleanHeader';
import Container from 'components/Container';
import withSSRAuthPage from 'utils/ssr/withSSRAuthPage';

import Input from 'components/form/Input';
import * as FormStyle from 'styles/components/form/FormStyle';
import FlexContainer from 'styles/custom/FlexContainer';
import Button from 'styles/custom/Button';

export default function RegisterTeacher() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Container title="Corrige.io - Realizar o login">
      <CleanHeader previusPage="/alunos" />
      <main>
        <AuthSection $minusHeight="150px">
          <FlexContainer
            $height="100%"
            $align="center"
            $justify="center"
            $maxWidth={500}
          >
            <FormStyle.Container onSubmit={handleSubmit}>
              <FormStyle.Title {...formAnimations(0)}>
                Criar Conta
              </FormStyle.Title>
              <Input
                name="name"
                placeholder="Nome completo"
                setState={setName}
                value={name}
                icon="fas fa-id-badge"
                {...formAnimations(1)}
              />
              <Input
                name="email"
                placeholder="E-mail"
                setState={setEmail}
                value={email}
                icon="fas fa-user"
                {...formAnimations(2)}
              />
              <Input
                name="password"
                placeholder="Senha"
                setState={setPassword}
                value={password}
                icon="fas fa-lock"
                {...formAnimations(3)}
              />
              <Button
                $color="white"
                $background="blue-400"
                $backgroundHovered="blue-500"
                $extends={true}
                $radius={10}
                $verticalPadding={2}
                $mt={3}
                {...formAnimations(4)}
                type="submit"
              >
                Logar
              </Button>
            </FormStyle.Container>
          </FlexContainer>
        </AuthSection>
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuthPage;
