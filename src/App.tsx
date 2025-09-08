import { useState, useMemo } from 'react'
import './App.css'
import { cardsData } from './data/cardsData'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCards = useMemo(() => {
    if (!searchTerm.trim()) {
      return cardsData
    }

    return cardsData.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="app">
      <div className="search-container">
        <div className="search-input-wrapper">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Buscar por título o categoría..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="clear-button"
              aria-label="Limpiar búsqueda"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="search-results">
            {filteredCards.length} resultado{filteredCards.length !== 1 ? 's' : ''} encontrado{filteredCards.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="cards-grid">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id} className="card">
              <div className="card-image">
                <img src='https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={card.title} />
                <div className="category-badge">
                  {card.category}
                </div>
              </div>
              <div className="card-content">
                <div className="card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-courses">{card.coursesCount} courses</p>
                <div className="card-logos">
                  <img src={card.logo} alt={`${card.title} logo`} className="card-logo" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <h3>No se encontraron resultados</h3>
            <p>Intenta con otros términos de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App