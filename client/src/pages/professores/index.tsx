import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/headers/Header';
import MainSection from 'components/sections/MainSection';
import FlexContainer from 'styles/custom/FlexContainer';

import * as SharedStyle from 'styles/shared';
import Button from 'styles/custom/Button';

export default function Teachers() {
  return (
    <Container title="Corrige.io - Para professores">
      <Header />
      <main>
        <MainSection
          id="main"
          title="Essa plataforma é para os professores."
          description="Nossa sistema foi criado para que os professores de redação
          criem turmas e adicionem alunos rapidamente e de forma fácil."
          image="/teaching.png"
          alt="Teaching"
          button="Saber mais"
          to="the-process"
        />

        <SharedStyle.Section>
          <SharedStyle.SectionTitleCentered>
            Algumas funções.
          </SharedStyle.SectionTitleCentered>
          <SharedStyle.SectionContent></SharedStyle.SectionContent>
        </SharedStyle.Section>

        <SharedStyle.Section>
          <SharedStyle.SectionContent>
            <FlexContainer $mb={-3.5} $maxWidth={800}>
              <SharedStyle.SectionDivision align="center">
                <SharedStyle.SectionTitle>
                  Que tal criar a sua conta?
                </SharedStyle.SectionTitle>
                <SharedStyle.SectionDescription>
                  Agora que você conheceu a plataforma, vamos criar a sua conta?
                  É simples e rápido, garanto que não vai levar nem um minuto.
                </SharedStyle.SectionDescription>
                <Button
                  $background="green-200"
                  $backgroundHovered="green-300"
                  $color="white"
                  $verticalPadding={1.5}
                  $horizontalPadding={2}
                  $radius={10}
                  $fontSize="sm"
                  $mt={4}
                >
                  Criar Conta
                </Button>
              </SharedStyle.SectionDivision>
              <SharedStyle.SectionDivision></SharedStyle.SectionDivision>
            </FlexContainer>
          </SharedStyle.SectionContent>
          <SharedStyle.Decoration position="bottom">
            <SharedStyle.StripedDecoration positionY={0} positionX={60} />
          </SharedStyle.Decoration>
        </SharedStyle.Section>
      </main>
      <Footer />
    </Container>
  );
}
