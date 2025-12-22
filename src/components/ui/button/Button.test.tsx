import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Button } from './button';

describe('Button Component', () => {
  test('renders button with children text', () => {
    render(<Button className="btn-class">ClickMe</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('ClickMe');
    expect(buttonElement).toHaveClass('btn-class');
  });

  test('calls onClick handler when clicked', () => {
    const handleSelect = jest.fn();
    render(<Button onClick={handleSelect}>submit</Button>);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
