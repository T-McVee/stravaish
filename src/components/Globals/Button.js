import styled from 'styled-components';

export const Button = (props) => {
  const { lable, handleClick, children } = props;

  return (
    <Wrapper lable={lable} onClick={handleClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.colors?.orange};
  color: ${({ theme }) => theme.colors?.white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.normal};
  border: none;
  border-radius: ${({ theme }) => theme.radii[2]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[4]};
  transition: background-color ${({ theme }) => theme.times.fast};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors?.orangeDark};
  }
`;
