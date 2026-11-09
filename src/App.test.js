import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('navigates to the projects page', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: /proyectos/i }));
  expect(screen.getByRole('heading', { name: /proyectos/i })).toBeInTheDocument();
});
