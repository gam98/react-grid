import React from 'react';
import { cardsData } from '../data/cardsData';
import { useAuth } from '../context/AuthContext';
import '../App.css';

const CardsGrid: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bienvenido, {user}!</h1>
        <button onClick={logout} className="logout-button">
          Cerrar Sesión
        </button>
      </header>
      
      <div className="cards-grid">
        {cardsData.map((card) => (
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
              <div className="card-logos test-card">
                <img src={card.logo} alt="Logo 1" className="card-logo test-img" />
              </div>
            </div>
          </div>
        ))}
        <div className="card">
          <div className="card-image">
            <img src='https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='test' />
            <div className="category-badge">
              'test'
            </div>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <h3 className="card-title">test</h3>
            <p className="card-courses">5 courses</p>
            <div className="card-logos test">
              <img src="./src/images/McIntireS_horizontal_logo.svg" alt="Logo 1" className="card-logo" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src='https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='test' />
            <div className="category-badge">
              'test'
            </div>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <h3 className="card-title">test</h3>
            <p className="card-courses">5 courses</p>
            <div className="card-logos test">
              <img src="./src/images/skillshare.png" alt="Logo 1" className="card-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
