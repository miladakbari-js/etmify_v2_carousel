import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Select } from './select';

describe('Select Component', () => {
  test('renders options based on props and applies classes', () => {
    const options = ['store', 'gameing', 'music'];
    render(<Select options={options} className="select-class" classSelect="wrapper-class" />);

    const renderedOptions = screen.getAllByRole('option');
    expect(renderedOptions).toHaveLength(options.length);

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });

    const wrapper = screen.getByRole('combobox').parentElement;
    expect(wrapper).toHaveClass('wrapper-class');

    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('select-class');
  });
});
