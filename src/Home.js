import React from 'react';
import { Link } from 'react-router-dom';
import bond from './img/download.jpeg'
const Home = ({ character }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <img src={bond} alt={character.name} style={{ maxWidth: '300px' }} />
      <h3>{character.name}</h3>
      <p>
        <Link to="/about">About</Link>
      </p>
    </div>
  );
};

export default Home;
