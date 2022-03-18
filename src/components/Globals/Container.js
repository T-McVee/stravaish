import styled from 'styled-components';

export const Container = (props) => {
  const { children } = props;

  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : 'fit-content')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin-right: 2.5rem;
  }
`;
