import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projetos() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Projeto 1"
          type="Website"
          imgUrl="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          imgUrl="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          imgUrl="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          imgUrl="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
          slug="teste"
        />
      </main>
    </ProjectsContainer>
  );
}
