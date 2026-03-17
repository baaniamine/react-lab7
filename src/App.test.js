import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the requested lab features', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  render(<App />);

  fireEvent.change(screen.getByLabelText(/entrez votre nom/i), {
    target: { value: 'Sami' },
  });

  expect(screen.getByText('Bonjour JSX, Sami')).toBeInTheDocument();
  expect(screen.getByText('Bonjour JavaScript pur, Sami')).toBeInTheDocument();
  expect(screen.getByText('Bonjour, Sami')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /cliquer ici/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('list', { name: /liste des profils/i })).toBeInTheDocument();
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Charlie')).toBeInTheDocument();

  consoleSpy.mockRestore();
});
