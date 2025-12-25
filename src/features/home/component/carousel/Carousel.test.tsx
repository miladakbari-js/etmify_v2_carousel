import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Carousel } from './carousel';

describe('Carousel Component', () => {
  test('renders head, actions and cards correctly', () => {
    render(
      <Carousel
        className="container"
        classActions="actions"
        classHead="head"
        title="Gift cards and digital credit"
        link="/show"
        linkLabel="showAll"
        actions={<div data-testid="carousel-actions">Actions content</div>}
        cards={<div data-testid="carousel-cards">Cards content</div>}
      />,
    );
    const carouselElement = screen.getByTestId('carousel');
    const linkElement = screen.getByText('showAll');
    const actionsElement = screen.getByTestId('carousel-actions');
    const cardsElement = screen.getByTestId('carousel-cards');

    expect(carouselElement).toBeInTheDocument();
    expect(carouselElement).toHaveClass('container');
    expect(carouselElement).toHaveTextContent('Gift cards and digital credit');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/show');

    expect(actionsElement).toBeInTheDocument();
    expect(actionsElement).toHaveTextContent('Actions content');

    expect(cardsElement).toBeInTheDocument();
    expect(cardsElement).toHaveTextContent('Cards content');
  });
});
