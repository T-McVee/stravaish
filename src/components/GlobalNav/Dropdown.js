import styled from 'styled-components';
import { DropdownOption } from './DropdownOption';
import { A } from '../Globals/A';

export const Dropdown = (props) => {
  const { label, links } = props;

  if (!label || !links) return null;
  return (
    <Wrapper>
      <A link={label.url}>{label.title}</A>
      <Ul className="options">
        {links &&
          links.map((el) => (
            <DropdownOption title={el.title} url={el.url} key={el.title} />
          ))}
      </Ul>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: fit-content;

  & > A {
    font-size: ${({ theme }) => theme.fontSize?.normal};
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors?.black};
    padding: 0 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors?.white};
    border-right: 1px solid ${({ theme }) => theme.colors?.white};
    border-left: 1px solid ${({ theme }) => theme.colors?.white};
  }

  :hover {
    & > A {
      color: ${({ theme }) => theme.colors?.orange};
      background-color: ${({ theme }) => theme.colors?.white};
      border-top: 1px solid ${({ theme }) => theme.colors?.greyMid};
      border-right: 1px solid ${({ theme }) => theme.colors?.greyMid};
      border-left: 1px solid ${({ theme }) => theme.colors?.greyMid};
    }

    & > ul {
      display: flex;
      width: 200px;
      flex-direction: column;
      position: absolute;
      top: 55px;
      background-color: ${({ theme }) => theme.colors?.white};
      border-right: 1px solid ${({ theme }) => theme.colors?.greyMid};
      border-bottom: 1px solid ${({ theme }) => theme.colors?.greyMid};
      border-left: 1px solid ${({ theme }) => theme.colors?.greyMid};
    }
  }
`;

const Ul = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
`;
