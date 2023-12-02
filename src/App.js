import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bond from './img/download.jpeg'
import About from './About';
import CharacterInfo from './CharacterInfo';

const characters = [
  { id: 1, name: 'Daniel Craig', photo: {Bond}, fact: 'Daniel Wroughton Craig CMG (born 2 March 1968) is an English actor. He gained international fame by playing the fictional secret agent James Bond for five installments in the film series, from Casino Royale (2006) up to No Time to Die (2021)' },
];

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home character={characters[0]} />}
          />
          <Route
            path="/about"
            element={<About character={characters[0]} />}
          />
          <Route
            path="/characters/:factId"
            element={<CharacterInfo characters={characters} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
