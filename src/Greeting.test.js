import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('affiche le message correct', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText('Bonjour, Alice')).toBeInTheDocument();
});
