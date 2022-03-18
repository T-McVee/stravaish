import styled from 'styled-components';

export const A = (props) => {
  const { link, children } = props;
  return (
    <Wrapper href={link} data-testid="link">
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors?.orange};

  &:hover {
    cursor: pointer;
  }

  li > & {
    color: ${({ theme }) => theme.colors?.black};
  }
`;
