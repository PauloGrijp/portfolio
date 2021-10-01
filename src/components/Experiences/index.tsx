import React from 'react';
import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="1 ano" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Lorem ipsum dolor sit amet, consecteturipsum dolor sit amet, consectetur"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Lorem ipsum dolor sit amet, consecteturipsum dolor sit amet, consectetur"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Lorem ipsum dolor sit amet, consecteturipsum dolor sit amet, consectetur"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Lorem ipsum dolor sit amet, consecteturipsum dolor sit amet, consectetur"
        />
      </section>
    </Container>
  );
}

export default Experiences;
