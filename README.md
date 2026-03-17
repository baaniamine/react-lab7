# React Lab 7

Application React construite a partir du contenu fonctionnel des images du TP, sans afficher les images elles-memes et sans transformer le projet en page de documentation.

## Fonctionnalites

- Saisie de nom avec un composant `JSXDemo` qui affiche le meme contenu via JSX et via `React.createElement`.
- Formulaire JSX avec `label`, `input`, `className` et `htmlFor`.
- Bouton enveloppe par un Higher-Order Component `withLogging` qui journalise ses props.
- Liste simple de profils fournie par un composant `DataLoader` utilisant une render prop.
- Composants `Greeting` et `Counter` inclus dans l'application.
- Tests unitaires et integration avec React Testing Library.

## Lancement

Le projet est configure pour demarrer sur `http://localhost:3000`.

```bash
npm install
npm start
```

Si vous voulez servir directement le build sur le meme port :

```bash
npm run serve
```

## Tests



https://github.com/user-attachments/assets/faebd017-5d90-42fc-a411-3cfc54146a93






## Build production

```bash
npm run build
```

## Structure principale

- `src/App.js` : composition generale de l'application.
- `src/JSXDemo.js` : saisie et comparaison JSX / JavaScript pur.
- `src/withLogging.js` : Higher-Order Component.
- `src/ButtonWithLogging.js` : bouton enrichi par le HOC.
- `src/DataLoader.js` : render prop qui fournit une liste de profils.
- `src/Greeting.js` et `src/Counter.js` : composants couverts par des tests.

