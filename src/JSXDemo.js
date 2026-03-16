import React from 'react';

function JSXDemo({ name, onNameChange }) {
  const elementJSX = <h2 className="greeting">Bonjour JSX, {name}</h2>;

  const elementJS = React.createElement(
    'h2',
    { className: 'greeting' },
    `Bonjour JavaScript pur, ${name}`
  );

  return (
    <section className="panel">
      <div className="panel-heading">
        <p className="eyebrow">JSX</p>
        <h2>Saisie et rendu instantanes</h2>
        <p>
          La meme information est affichee une fois via JSX et une fois via
          <code> React.createElement </code>.
        </p>
      </div>

      <div className="surface">
        {elementJSX}
        {elementJS}

        <label className="field-label" htmlFor="champ">
          Entrez votre nom
        </label>
        <input
          id="champ"
          className="text-input"
          type="text"
          value={name}
          placeholder="Votre prenom"
          onChange={(event) => onNameChange(event.target.value)}
        />
        <p className="helper-copy">
          Le reste de l&apos;application reutilise ce nom pour les composants
          tests et l&apos;etat global.
        </p>
      </div>
    </section>
  );
}

export default JSXDemo;
