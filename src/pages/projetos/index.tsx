import Head from 'next/head';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projetos() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <ProjectsContainer>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Projetos | Paulo Xavier</title>
      </Head>
      <Header />
      <main className="container" data-aos="fade-up">
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
