import { ItemContainer } from './styles';

interface ExperienceItemProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienceItem({
  year,
  title,
  description
}: ExperienceItemProps) {
  return (
    <div>
      <ItemContainer>
        <div data-aos="fade-up">
          <h1>{year}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </ItemContainer>
    </div>
  );
}
