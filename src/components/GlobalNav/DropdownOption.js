import { A } from '../Globals/A';
import styled from 'styled-components';

export const DropdownOption = (props) => {
  const { title, url } = props;

  if (!title) return null;
  return <Li key={title}>{url ? <A href={url}>{title}</A> : <>{title}</>}</Li>;
};

const Li = styled.li`
  list-style: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyMid};
  }
`;
