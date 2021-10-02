import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';

function Projeto() {
  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title="Projeto 1"
        type="Website"
        imgUrl="https://img.freepik.com/free-vector/black-elegant-website-design-template-business-development_136420-21.jpg?size=626&ext=jpg"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          voluptatibus explicabo assumenda error rem minima reprehenderit
          quibusdam ea impedit dolores repellendus, suscipit sint eius.
          Reiciendis optio voluptates excepturi vel enim nam dolores! Vel
          voluptas excepturi veritatis accusamus dolore. Temporibus dolorum
          debitis tenetur modi ipsum ipsa magni doloribus numquam reiciendis
          libero vitae labore, dicta est animi tempore aut at. Eos vero in
          consectetur temporibus inventore tempore ab animi, commodi, iure illum
          excepturi voluptate ullam tempora neque mollitia, ut ex corporis
          asperiores!
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export default Projeto;
