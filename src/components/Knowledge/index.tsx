import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />

      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="JS" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}

export default Knowledge;
