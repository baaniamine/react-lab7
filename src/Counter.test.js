import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('incremente le compteur au clic', () => {
  render(<Counter />);
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
});
