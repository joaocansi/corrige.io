import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/headers/Header';
import MainSection from 'components/sections/MainSection';

export default function Students() {
  return (
    <Container title="Corrige.io - Para professores">
      <Header />
      <main>
        <MainSection
          id="main"
          title="Essa plataforma é para os estudantes."
          description="Nossa sistema foi criado para que os professores de redação
          criem turmas e adicionem alunos rapidamente e de forma fácil."
          image="/student.png"
          alt="Student"
          button="Saber mais"
          to="the-process"
        />
      </main>
      <Footer />
    </Container>
  );
}
