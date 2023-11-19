// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above

  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  const incrementCount = screen.getByRole('button', {name: '+'});
  const newCount = screen.getByTestId('count');

  fireEvent.click(incrementCount);
  expect(newCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  const decrementCount = screen.getByRole('button', {name: '-'});
  const newCount = screen.getByTestId('count');

  fireEvent.click(decrementCount);
  expect(newCount).toHaveTextContent('-1');
});
