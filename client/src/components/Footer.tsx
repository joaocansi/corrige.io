import * as FooterStyle from 'styles/components/FooterStyle';
import Logo from './Logo';

export default function Footer() {
  return (
    <FooterStyle.Container>
      <FooterStyle.Content>
        <Logo />
        <FooterStyle.Copyright>
          Copyright © 2018 - Todos os direitos reservados
        </FooterStyle.Copyright>
      </FooterStyle.Content>
    </FooterStyle.Container>
  );
}
