import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🏉 AFL Hunter</h1>
          <p className="hero-subtitle">Your junior AFL football hub</p>
          <p className="hero-desc">
            Follow all 18 AFL teams, track the ladder standings, and stay up to date
            with the latest fixtures and results — all in one place.
          </p>
          <div className="hero-actions">
            <Link to="/ladder" className="btn btn-primary">View Ladder</Link>
            <Link to="/fixtures" className="btn btn-secondary">See Fixtures</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🏆</span>
          <h3>18 AFL Teams</h3>
          <p>Explore all teams, their colours and abbreviations.</p>
          <Link to="/teams" className="feature-link">View Teams →</Link>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3>Live Ladder</h3>
          <p>Check the latest standings and percentages.</p>
          <Link to="/ladder" className="feature-link">View Ladder →</Link>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📅</span>
          <h3>Fixtures & Results</h3>
          <p>Upcoming games and recent round results.</p>
          <Link to="/fixtures" className="feature-link">View Fixtures →</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
