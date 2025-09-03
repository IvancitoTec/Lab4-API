import React from 'react';
import MarvelHeroes from './components/MarvelHeroes/MarvelHeroes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Marvel Heroes Buscador</h1>
        <p>Sumérgete en el  universo Marvel</p>
      </header>
      <main>
        <MarvelHeroes />
      </main>
    </div>
  );
}

export default App;