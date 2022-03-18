import { A } from '../Globals/A';
import styled from 'styled-components';

export const DropdownOption = (props) => {
  const { title, url } = props;

  if (!title) return null;
  return (
    <Li key={title} data-testid="dropdown-option">
      {url ? <A link={url}>{title}</A> : <>{title}</>}
    </Li>
  );
};

const Li = styled.li`
  width: 100%;
  list-style: none;
  padding: 1rem 0rem 1rem 1rem;
  margin: 0;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors?.greyMid};
  }
`;
