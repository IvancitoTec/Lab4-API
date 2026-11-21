import React from 'react';
import MarvelHeroes from './components/MarvelHeroes/MarvelHeroes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Buscador de heroes Marvel</h1>
        <p>Encuentra tu heroe o villano favorito, no te juzgo</p>
      </header>
      <main>
        <MarvelHeroes />
      </main>
    </div>
  );
}

export default App;