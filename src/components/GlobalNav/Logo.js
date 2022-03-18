import styled from 'styled-components';

export const Logo = ({ children, className }) => {
  return (
    <Wrapper className={className} data-testid="logo">
      {children}
    </Wrapper>
  );
};

export const StyledLogo = styled(Logo)``;

const Wrapper = styled.span`
  color: ${({ theme }) => theme.colors?.orange};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize?.large};
  text-transform: uppercase;
`;
