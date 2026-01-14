import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  test('should be disabled when isLoading is true', () => {
    render(<Button isLoading={true}>Click Me</Button>);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDisabled();
  });

  test('should call onClick function when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElemnt = screen.getByText('Click Me');
    fireEvent.click(buttonElemnt);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should NOT call onClick when isLoading is true', () => {
    const handleClick = jest.fn();

    render(
      <Button isLoading={true} onClick={handleClick}>
        submit
      </Button>,
    );
    const buttonElemnt = screen.getByRole('button');
    fireEvent.click(buttonElemnt);
    expect(handleClick).not.toHaveBeenCalled();
  });

  //as Link

  test('should render as an anchor tag when as="link" is provided', () => {
    render(
      <Button as="link" href="/dashboard">
        Go to Dashboard
      </Button>,
    );

    const linkElement = screen.getByText('Go to Dashboard');
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', '/dashboard');
  });

  test('should have disabled class when as="link" and isDisabled is true', () => {
    render(
      <Button as="link" href="/test" isDisabled={true}>
        Disabled Link
      </Button>,
    );

    const linkElement = screen.getByText('Disabled Link');
    expect(linkElement).toHaveClass('button-disabled');
  });

  //Icon Button
  test('should render startIcon and endIcon when provided', () => {
    const startIcon = <span data-testid="start-icon">✅</span>;
    const endIcon = <span data-testid="end-icon">✔</span>;

    render(
      <Button startIcon={startIcon} endIcon={endIcon}>
        Icon Button
      </Button>,
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    expect(screen.getByText('Icon Button')).toBeInTheDocument();
  });

  test('should show loading spinner and hide startIcon when isLoading is true', () => {
    const startIcon = <span data-testid="start-icon">✅</span>;

    render(
      <Button isLoading={true} startIcon={startIcon}>
        Loading...
      </Button>,
    );

    expect(screen.queryByTestId('start-icon')).not.toBeInTheDocument();
  });

  test('should display loadingText when isLoading is true and loadingText is provided', () => {
    render(
      <Button isLoading={true} loadingText="Please wait...">
        Click Me
      </Button>,
    );

    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.queryByText('Click Me')).not.toBeInTheDocument();
  });

  test('should use default "#" href for link when no href is provided', () => {
    render(<Button as="link">Link with no href</Button>);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '#');
  });
});
