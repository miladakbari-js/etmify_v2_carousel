import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Card } from './card';

describe('Card Component', () => {
  test('render Card with Children text', () => {
    render(
      <Card
        className="card_class"
        title="gift card"
        link="/gift"
        linkLabel="buy"
        icon={<svg data-testid="card-icon" />}
      />,
    );
    const cardElement = screen.getByTestId('card');
    const linkElement = screen.getByText('buy');
    const iconElement = screen.getByTestId('card-icon');

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('card_class');
    expect(cardElement).toHaveTextContent('gift card');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/gift');
    expect(iconElement).toBeInTheDocument();
  });
});
