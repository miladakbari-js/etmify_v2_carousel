import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Pagination } from './pagination';

describe('Pagination Component', () => {
  test('renders correct number of dots', () => {
    render(<Pagination totalPages={4} currentPage={1} />);

    const indicators = screen.getAllByRole('presentation');
    expect(indicators).toHaveLength(4);
  });
});