import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import { Logo } from './Logo';

const index = () => {
  return (
    <Wrapper className="wrapper">
      <nav>
        <LinkBlock className="left">
          <Logo>STRAVAish</Logo>
          <div className="search">?</div>
          <Dropdown label={dashboard.label} links={dashboard.links} />
          <Dropdown label={training.label} links={training.links} />
          <Dropdown label={training.label} links={training.links} />
        </LinkBlock>
        <div className="right"></div>
      </nav>
    </Wrapper>
  );
};

const dashboard = {
  label: {
    title: 'Dashboard',
    url: '#',
  },
  links: [
    { title: 'One', url: '#' },
    { title: 'Two', url: '#' },
    { title: 'Three', url: '#' },
    { title: 'Four', url: '#' },
  ],
};

const training = {
  label: {
    title: 'Training',
    url: '#',
  },
  links: [
    { title: 'One', url: '#' },
    { title: 'Two', url: '#' },
    { title: 'Three', url: '#' },
    { title: 'Four', url: '#' },
  ],
};

export default index;

const Wrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => theme.colors.greyLight} 2px solid;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.greyMid};

  nav {
    width: 100%;
    max-width: 1218px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    // border: 1px solid green;

    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const LinkBlock = styled.div`
  & > * {
    margin-right: 2.5rem;
  }
`;
