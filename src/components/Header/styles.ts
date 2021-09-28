/* eslint-disable prettier/prettier */
import { lighten } from 'polished';
import styled from 'styled-components';

interface INavLinkContainerProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }
`;

export const NavLinkContainer = styled.li<INavLinkContainerProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
    props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: color 0.3s;

    &:hover {
      color: ${props =>
    props.isActive
      ? lighten(0.2, props.theme.primary)
      : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
