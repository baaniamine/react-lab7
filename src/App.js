import { useState } from 'react';
import './App.css';
import JSXDemo from './JSXDemo';
import DataLoader from './DataLoader';
import ButtonWithLogging from './ButtonWithLogging';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  const [name, setName] = useState('Alice');

  return (
    <div className="app-shell">
      <main className="app-layout">
        <section className="panel">
          <h1>TP JSX et Composition</h1>
          <JSXDemo name={name} onNameChange={setName} />
        </section>

        <section className="panel">
          <h2>Bouton</h2>
          <ButtonWithLogging label="Cliquer ici" />
        </section>

        <section className="panel">
          <h2>Liste des profils</h2>
          <DataLoader
            render={(data) => (
              <ul className="simple-list" aria-label="Liste des profils">
                {data.map((profile) => (
                  <li key={profile}>{profile}</li>
                ))}
              </ul>
            )}
          />
        </section>

        <section className="panel">
          <Greeting name={name} />
        </section>

        <section className="panel">
          <h2>Compteur</h2>
          <Counter />
        </section>
      </main>
    </div>
  );
}

export default App;
