import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CharacterInfo = ({ characters }) => {
  const { factId } = useParams();
  const character = characters.find((char) => char.id === parseInt(factId));

  if (!character) {
    return <h2>Fact not found!</h2>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.photo} alt={character.name} style={{ maxWidth: '300px' }} />
      <p>{character.fact}</p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default CharacterInfo;
