import styled from 'styled-components';
import { DropdownOption } from './DropdownOption';
import { A } from '../Globals/A';

export const Dropdown = (props) => {
  const { label, links } = props;

  return (
    <Wrapper>
      <A href={label.url}>{label.title}</A>
      <ul className="options">
        {links &&
          links.map((el) => (
            <DropdownOption title={el.title} url={el.url} key={el.title} />
          ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 55px;
  width: 100px;

  & > A {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors.black};
    padding-left: 1rem;
  }

  & > ul {
    position: absolute;
    top: 1.5rem;
    display: none;
  }

  :hover {
    & > A {
      color: ${({ theme }) => theme.colors.orange};
      background-color: ${({ theme }) => theme.colors.white};
      border-top: 1px solid ${({ theme }) => theme.colors.greyMid};
      border-right: 1px solid ${({ theme }) => theme.colors.greyMid};
      border-left: 1px solid ${({ theme }) => theme.colors.greyMid};
    }

    & > ul {
      display: inline-block;
      background-color: ${({ theme }) => theme.colors.white};
      border-right: 1px solid ${({ theme }) => theme.colors.greyMid};
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyMid};
      border-left: 1px solid ${({ theme }) => theme.colors.greyMid};
    }
  }
`;
