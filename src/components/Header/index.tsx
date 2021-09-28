import { NavLink } from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink path="/" title="Home" />
        <NavLink path="/projetos" title="Projetos" />
      </ul>
    </Container>
  );
}

export default Header;
