/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/cartoonCode.png';

function HomeHero() {
  return (
    <Container>
      <img src={ picture } alt="Cartoon man coding" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Paulo</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> { '\u007B' }
            <div>
              Nome: <span className="blue">Paulo,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Xavier</span>
            </div>
            { '\u007D' }
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> { '\u007B' }
            <div>
              Funcção: <span className="blue">Dev Front-end</span>
            </div>
            <div>
              Empresa: <span className="blue">Grijp Techs</span>
            </div>
            { '\u007D' }
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
