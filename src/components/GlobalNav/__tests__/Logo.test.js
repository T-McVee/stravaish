import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from '../Logo';

const text = 'Stravaish';

it('Renders correctly', () => {
  render(<Logo>{text}</Logo>);

  expect(screen.getByTestId('logo').textContent).toBe(text);
});
