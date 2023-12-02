import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ character }) => {
  return (
    <div>
      <h2>About Page</h2>
      <p>After training at the National Youth Theatre in London and graduating from the Guildhall School of Music and Drama in 1991, Craig began his career on stage. He began acting with the drama The Power of One (1992), and had his breakthrough role in the drama serial Our Friends in the North (1996). He gained prominence for his supporting roles in films such as Elizabeth (1998), Lara Croft: Tomb Raider (2001), Road to Perdition (2002), Layer Cake (2004), and Munich (2005).{character.name}</p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default About;
