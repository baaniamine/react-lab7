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
        <h2>Profil</h2>
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
      </div>
    </section>
  );
}

export default JSXDemo;
