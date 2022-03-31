import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/headers/Header';
import MainSection from 'components/sections/MainSection';
import Button from 'styles/custom/Button';

import * as HomeStyle from 'styles/pages/HomeStyle';
import * as SharedStyle from 'styles/shared';

export default function Home() {
  return (
    <Container title="corrige-io">
      <Header />
      <main>
        <MainSection
          id="main"
          title="Corrigir redações nunca foi tão fácil."
          description="Nossa plataforma foi criada para auxiliar professores e alunos
                na correção de redações de diferentes bancas de vestibulares
                pelo Brasil."
          image="/doing-essay.png"
          alt="Doing essay"
          button="Saber mais"
          to="detailed-essays"
        />

        <SharedStyle.Section id="detailed-essays">
          <SharedStyle.SectionContent reverse={true}>
            <SharedStyle.SectionDivision>
              <HomeStyle.Macbook
                src="/decorations/macbook-mockup.png"
                alt="Macbook"
              />
              <Button
                $radius={10}
                $fontSize="sm"
                $color="white"
                $background="red-400"
                $backgroundHovered="red-500"
                $horizontalPadding={2}
                $verticalPadding={1.5}
                $mt={2}
              >
                Ver exemplo
              </Button>
            </SharedStyle.SectionDivision>
            <SharedStyle.SectionDivision mb={10}>
              <SharedStyle.SectionTitle>
                Correções bem detalhadas.
              </SharedStyle.SectionTitle>
              <SharedStyle.SectionDescription>
                É extremamente importante que as correções sejam detalhadas e,
                portanto, nossa plataforma possui um sistema completo que irá
                auxiliar os alunos e professores em seus objetivos
              </SharedStyle.SectionDescription>
            </SharedStyle.SectionDivision>
          </SharedStyle.SectionContent>

          <SharedStyle.Decoration position="bottom">
            <SharedStyle.StripedDecoration positionY={0} positionX={60} />
          </SharedStyle.Decoration>
        </SharedStyle.Section>

        <SharedStyle.Section id="available-models">
          <SharedStyle.SectionTitleCentered>
            Bancas disponíveis.
          </SharedStyle.SectionTitleCentered>
          <SharedStyle.SectionContent>
            <HomeStyle.EssayModelContainer>
              <HomeStyle.EssayModel src="/icons/enem.png" alt="Enem" />
              <HomeStyle.EssayModel src="/icons/fuvest.png" alt="Fuvest" />
              <HomeStyle.EssayModel src="/icons/vunesp.png" alt="Vunesp" />
              <HomeStyle.EssayModel src="/icons/uerj.png" alt="Uerj" />
              <HomeStyle.EssayModel src="/icons/ita.png" alt="Ita" />
              <HomeStyle.EssayModel src="/icons/more.png" alt="Dentro outros" />
            </HomeStyle.EssayModelContainer>
          </SharedStyle.SectionContent>
        </SharedStyle.Section>

        <SharedStyle.Section id="website-responsivity">
          <SharedStyle.SectionContent maxWidth={1000}>
            <SharedStyle.SectionDivision align="right" mb={10}>
              <SharedStyle.SectionTitle>
                Plataforma para qualquer dispositivo.
              </SharedStyle.SectionTitle>
              <SharedStyle.SectionDescription>
                Nossa plataforma foi pensada para atender todos os tipos de
                usuários e, portanto, qualquer dispositivo conseguirá acessar
                nossa sistema sem qualquer perda de funções.
              </SharedStyle.SectionDescription>
            </SharedStyle.SectionDivision>
            <SharedStyle.SectionDivision>
              <HomeStyle.Iphone
                src="/decorations/iphone-mockup.png"
                alt="Iphone"
              />
            </SharedStyle.SectionDivision>
          </SharedStyle.SectionContent>

          <SharedStyle.Decoration position="top" invert>
            <SharedStyle.StripedDecoration positionY={0} positionX={60} />
          </SharedStyle.Decoration>
        </SharedStyle.Section>

        <SharedStyle.Section id="contact" background="background">
          <SharedStyle.SectionContent>
            <SharedStyle.SectionDivision mb={40}>
              <SharedStyle.SectionTitle>Contato.</SharedStyle.SectionTitle>
              <SharedStyle.SectionDescription>
                Ficou com alguma dúvida? Não fique com medo de nos mandar uma
                mensagem.
              </SharedStyle.SectionDescription>
            </SharedStyle.SectionDivision>
            <SharedStyle.SectionDivision>
              <HomeStyle.ContactForm>
                <HomeStyle.ContactInput placeholder="Nome Completo" />
                <HomeStyle.ContactInput placeholder="Tópico do Contato" />
                <HomeStyle.ContactTextarea placeholder="Mensagem do Contato" />
                <Button
                  $radius={10}
                  $fontSize="sm"
                  $color="white"
                  $background="green-200"
                  $backgroundHovered="green-300"
                  $horizontalPadding={2}
                  $verticalPadding={1.5}
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </HomeStyle.ContactForm>
            </SharedStyle.SectionDivision>
          </SharedStyle.SectionContent>
          <SharedStyle.StripedDecoration positionY={0} positionX={60} />
          <SharedStyle.CircleDecoration
            width={140}
            positionX={20}
            positionY={60}
          />
          <SharedStyle.CircleDecoration
            width={160}
            positionX={30}
            positionY={5}
          />
          <SharedStyle.CircleDecoration
            width={130}
            positionX={60}
            positionY={85}
          />
        </SharedStyle.Section>
      </main>
      <Footer />
    </Container>
  );
}
