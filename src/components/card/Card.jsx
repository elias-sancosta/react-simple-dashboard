import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

export default function Card({ id, name, picture }) {
  return (
    <div className="card">
      <img src={picture} alt={id + name} />
      <h2>{name}</h2>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  id: 0,
  name: 'No name',
};
