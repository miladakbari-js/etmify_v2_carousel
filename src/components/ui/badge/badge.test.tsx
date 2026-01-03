import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';
import '@testing-library/jest-dom';

describe('Badge Component', () => {
  test('renders badge with correct children', () => {
    render(<Badge>New Label</Badge>);

    const badgeElement = screen.getByText('New Label');

    expect(badgeElement).toBeInTheDocument();
  });

  test('applies correct color class when color prop is provided', () => {
    render(<Badge color="success">Success Badge</Badge>);

    const badgeElement = screen.getByText('Success Badge');

    expect(badgeElement).toHaveClass('badge-success');
  });

  test('applies primary color by default', () => {
    render(<Badge>Default Badge</Badge>);

    const badgeElement = screen.getByText('Default Badge');

    expect(badgeElement).toHaveClass('badge-primary');
  });

  test('applies rounded attributes' , ()=>{
    render(<Badge rounded={true}>Rounded Badge</Badge>);

    const badgeElement = screen.getByText("Rounded Badge")

    expect(badgeElement).toHaveClass('badge-fullRounded')
  })
});
