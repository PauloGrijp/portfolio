import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  return (
    <FormContainer data-aos="fade-up">
      <Input placeholder="Nome" required />
      <Input type="email" placeholder="E-mail" required />
      <TextArea placeholder="Mensagem" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}
