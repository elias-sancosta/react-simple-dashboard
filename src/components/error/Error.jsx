import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
  return (
    <div className="error_container">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="error_link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
