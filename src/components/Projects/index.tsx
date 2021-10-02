import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Ultimos projetos" />

      <section>
        <ProjectItem
          title="Projeto 1"
          type="WebSite"
          slug="projeto1"
          img="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
        />
        <ProjectItem
          title="Projeto 2"
          type="WebSite"
          slug="projeto2"
          img="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
        />
        <ProjectItem
          title="Projeto 3"
          type="WebSite"
          slug="projeto3"
          img="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
        />
        <ProjectItem
          title="Projeto 4"
          type="WebSite"
          slug="projeto4"
          img="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
