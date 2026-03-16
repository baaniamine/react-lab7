import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('allows selecting and saving a favorite profile', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  render(<App />);

  const nameInput = screen.getByLabelText(/entrez votre nom/i);
  fireEvent.change(nameInput, { target: { value: 'Sami' } });

  expect(screen.getByText('Bonjour JSX, Sami')).toBeInTheDocument();
  expect(screen.getByText('Bonjour JavaScript pur, Sami')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /choisir charlie/i }));
  expect(screen.getByText('Bonjour, Charlie')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /ajouter aux favoris/i }));

  const favorites = screen.getByRole('list', { name: /liste des favoris/i });
  expect(within(favorites).getByText('Charlie')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /profil deja ajoute/i })
  ).toBeDisabled();

  consoleSpy.mockRestore();
});
