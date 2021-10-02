import { ReactNode } from 'react';
import { KnowledgeItemContainer } from './styles';

interface KnowledgeItemContainerProps {
  title: string;
  icon: ReactNode;
}

export default function KnowledgeItem({
  title,
  icon
}: KnowledgeItemContainerProps) {
  return (
    <KnowledgeItemContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </KnowledgeItemContainer>
  );
}
