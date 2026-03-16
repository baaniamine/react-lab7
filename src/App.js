import { useState } from 'react';
import './App.css';
import JSXDemo from './JSXDemo';
import DataLoader from './DataLoader';
import ButtonWithLogging from './ButtonWithLogging';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  const [name, setName] = useState('Amina');
  const [selectedProfile, setSelectedProfile] = useState('Alice');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const hasFavorite = favorites.includes(selectedProfile);

  function handleAddFavorite() {
    if (hasFavorite) {
      return;
    }

    setFavorites((currentFavorites) => [...currentFavorites, selectedProfile]);
  }

  function renderProfiles(profiles) {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const visibleProfiles = profiles.filter((profile) =>
      profile.toLowerCase().includes(normalizedSearch)
    );

    if (!visibleProfiles.length) {
      return (
        <p className="empty-state">
          Aucun profil ne correspond a votre recherche.
        </p>
      );
    }

    return (
      <ul className="profile-list" aria-label="Liste des profils">
        {visibleProfiles.map((profile) => {
          const isActive = profile === selectedProfile;

          return (
            <li
              key={profile}
              className={`profile-item${isActive ? ' is-active' : ''}`}
            >
              <button
                type="button"
                className="profile-select"
                aria-label={`Choisir ${profile}`}
                onClick={() => setSelectedProfile(profile)}
              >
                <span className="profile-name">{profile}</span>
                <span className="profile-status">
                  {isActive ? 'Actif' : 'Choisir'}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="app-shell">
      <div className="app-shell__glow app-shell__glow--one" />
      <div className="app-shell__glow app-shell__glow--two" />

      <main className="app-layout">
        <section className="panel panel--hero">
          <div className="hero-stats">
            <article className="stat-card">
              <span className="stat-card__value">{favorites.length}</span>
              <span className="stat-card__label">favori(s)</span>
            </article>
            <article className="stat-card">
              <span className="stat-card__value">{selectedProfile}</span>
              <span className="stat-card__label">profil actif</span>
            </article>
            <article className="stat-card">
              <span className="stat-card__value">{name}</span>
              <span className="stat-card__label">nom saisi</span>
            </article>
          </div>
        </section>

        <JSXDemo name={name} onNameChange={setName} />

        <section className="panel">
          <div className="panel-heading">
            <h2>Profils</h2>
          </div>

          <label className="field-label" htmlFor="profile-search">
            Rechercher un profil
          </label>
          <input
            id="profile-search"
            className="text-input"
            type="search"
            placeholder="Exemple : Alice"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <DataLoader render={renderProfiles} />
        </section>

        <section className="panel">
          <div className="panel-heading">
            <h2>Favoris</h2>
          </div>

          <div className="action-grid">
            <div className="surface">
              <Greeting name={selectedProfile} />
            </div>

            <div className="surface surface--compact">
              <ButtonWithLogging
                label={hasFavorite ? 'Profil deja ajoute' : 'Ajouter aux favoris'}
                onClick={handleAddFavorite}
                disabled={hasFavorite}
              />
            </div>
          </div>

          <div className="favorites">
            <div>
              <h3>Favoris sauvegardes</h3>
              <p>
                {favorites.length
                  ? 'Votre selection persiste dans l etat du composant.'
                  : 'Ajoutez un profil pour construire votre shortlist.'}
              </p>
            </div>

            <ul className="favorites-list" aria-label="Liste des favoris">
              {favorites.length ? (
                favorites.map((favorite) => <li key={favorite}>{favorite}</li>)
              ) : (
                <li>Aucun favori pour le moment</li>
              )}
            </ul>
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <h2>Compteur</h2>
          </div>

          <div className="surface">
            <Counter />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
