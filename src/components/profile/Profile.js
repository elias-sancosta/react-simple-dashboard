import React from 'react';
import './Profile.css';

function Profile({ data }) {
  return (
    <div className="profil-container">
      <h1>
        Bonjour <span className="userName">{data}</span>
      </h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </div>
  );
}

export default Profile;
