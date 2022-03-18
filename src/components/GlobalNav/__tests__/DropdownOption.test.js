import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { DropdownOption } from '../DropdownOption';

const fakeOption = { title: 'Dashboard', url: '#' };

beforeEach(cleanup);

it('renders correctly with title & url prop', () => {
  render(<DropdownOption title={fakeOption.title} url={fakeOption.url} />);

  expect(screen.getByRole('listitem')).toBeVisible();
  expect(screen.getByRole('listitem').textContent).toBe(fakeOption.title);
  expect(screen.getByTestId('link')).toHaveAttribute('href', fakeOption.url);
});

it('renders correctly with just title prop', () => {
  render(<DropdownOption title={fakeOption.title} url="" />);

  expect(screen.getByRole('listitem')).toBeVisible();
  expect(screen.getByRole('listitem').textContent).toBe(fakeOption.title);
});

it('does not render without title prop', () => {
  render(<DropdownOption url="#" />);

  expect(screen.queryByRole('listitem')).toBeFalsy();
});
