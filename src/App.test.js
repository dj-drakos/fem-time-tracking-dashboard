import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const Element = screen.getByText(/Work/i);
  expect(Element).toBeInTheDocument();
});
