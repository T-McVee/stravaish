import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

beforeEach(cleanup);

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

it('Each link has the correct url', () => {
  render(<Dropdown label={dashboard.label} links={dashboard.links} />);

  const links = screen.getAllByTestId('link');

  expect(links[0]).toHaveAttribute('href', dashboard.links[0].url);
  expect(links[1]).toHaveAttribute('href', dashboard.links[1].url);
  expect(links[2]).toHaveAttribute('href', dashboard.links[2].url);
  expect(links[3]).toHaveAttribute('href', dashboard.links[3].url);
});

it('Renders a dropdownOption for each element in the links array', () => {
  render(<Dropdown label={dashboard.label} links={dashboard.links} />);

  expect(screen.getAllByTestId('dropdown-option').length).toBe(
    dashboard.links.length
  );
});

it('Renders the label for the dropdown list', () => {
  render(<Dropdown label={dashboard.label} links={dashboard.links} />);

  expect(screen.getAllByTestId('dropdown-option').length).toBe(
    dashboard.links.length
  );
});
