import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch'; 
import Loading from '../Loading/Loading';
import './MarvelHeroes.css';

const MarvelHeroes = () => {
  const [selectedHero, setSelectedHero] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: heroes, loading, error } = useFetch('https://akabab.github.io/superhero-api/api/all.json');

  const marvelHeroes = heroes ? heroes.filter(hero => 
    hero.biography.publisher === 'Marvel Comics'
  ) : [];

  const filteredHeroes = marvelHeroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <Loading message="Cargando héroes de Marvel..." />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="marvel-heroes-container">
      <h2>Héroes/Villanos del mundo de Marvel</h2>
      
      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar héroe de Marvel..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="hero-count">
          {filteredHeroes.length} de {marvelHeroes.length} héroes
        </span>
      </div>

      <div className="content">
        <div className="heroes-section">
          <h3>Personajes de Marvel</h3>
          <div className="heroes-grid">
            {filteredHeroes.map(hero => (
              <div
                key={hero.id}
                className={`hero-card ${selectedHero?.id === hero.id ? 'selected' : ''}`}
                onClick={() => handleHeroClick(hero)}
              >
                <img 
                  src={hero.images.md} 
                  alt={hero.name}
                  className="hero-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x300/ff6b6b/ffffff?text=Imagen+no+disponible';
                  }}
                />
                <div className="hero-info">
                  <h4>{hero.name}</h4>
                  <p className="hero-alias">{hero.biography.fullName || 'Sin alias'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedHero && (
          <div className="hero-details">
            <h3>Detalles del Héroe</h3>
            <div className="hero-detail-card">
              <img 
                src={selectedHero.images.lg} 
                alt={selectedHero.name}
                className="hero-detail-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x400/ff6b6b/ffffff?text=Imagen+no+disponible';
                }}
              />
              <div className="hero-detail-info">
                <h2>{selectedHero.name}</h2>
                <p><strong>Nombre real:</strong> {selectedHero.biography.fullName || 'Desconocido'}</p>
                <p><strong>Alias:</strong> {selectedHero.biography.aliases.join(', ') || 'Ninguno'}</p>
                <p><strong>Editorial:</strong> {selectedHero.biography.publisher}</p>
                <p><strong>Ocupación:</strong> {selectedHero.work.occupation}</p>
                
                <div className="stats">
                  <h4>Estadísticas:</h4>
                  <div className="stat-bars">
                    <div className="stat">
                      <span>Inteligencia: </span>
                      <div className="stat-bar">
                        <div 
                          className="stat-fill" 
                          style={{width: `${selectedHero.powerstats.intelligence}%`}}
                        ></div>
                      </div>
                      <span>{selectedHero.powerstats.intelligence}</span>
                    </div>
                    <div className="stat">
                      <span>Fuerza: </span>
                      <div className="stat-bar">
                        <div 
                          className="stat-fill" 
                          style={{width: `${selectedHero.powerstats.strength}%`}}
                        ></div>
                      </div>
                      <span>{selectedHero.powerstats.strength}</span>
                    </div>
                    <div className="stat">
                      <span>Velocidad: </span>
                      <div className="stat-bar">
                        <div 
                          className="stat-fill" 
                          style={{width: `${selectedHero.powerstats.speed}%`}}
                        ></div>
                      </div>
                      <span>{selectedHero.powerstats.speed}</span>
                    </div>
                    <div className="stat">
                      <span>Durabilidad: </span>
                      <div className="stat-bar">
                        <div 
                          className="stat-fill" 
                          style={{width: `${selectedHero.powerstats.durability}%`}}
                        ></div>
                      </div>
                      <span>{selectedHero.powerstats.durability}</span>
                    </div>
                    <div className="stat">
                      <span>Poder: </span>
                      <div className="stat-bar">
                        <div 
                          className="stat-fill" 
                          style={{width: `${selectedHero.powerstats.power}%`}}
                        ></div>
                      </div>
                      <span>{selectedHero.powerstats.power}</span>
                    </div>
                    <div className="stat">
                      <span>Combate: </span>
                      <div className="stat-bar">
                        <div 
                          className="stat-fill" 
                          style={{width: `${selectedHero.powerstats.combat}%`}}
                        ></div>
                      </div>
                      <span>{selectedHero.powerstats.combat}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarvelHeroes;