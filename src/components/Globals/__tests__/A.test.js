import React from 'react';
import { render, screen } from '@testing-library/react';
import { A } from '../A';

const fakeLink = {
  url: 'www.tmcvee.com',
  label: 'fake',
};

it.only('Renders correctly', () => {
  render(<A link={fakeLink.url}>{fakeLink.label}</A>);

  expect(screen.getByTestId('link')).toHaveAttribute('href', fakeLink.url);
});
