import styled from 'styled-components';

export const Logo = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize[2]};
`;
