import styled from 'styled-components';

export const A = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};

  &:hover {
    cursor: pointer;
  }

  li > & {
    color: ${({ theme }) => theme.colors.black};

    :hover {
      background-color: ${({ theme }) => theme.colors.greyMid};
    }
  }
`;
