import fixtures from '../data/fixtures'
import './Fixtures.css'

function Fixtures() {
  return (
    <div className="fixtures-page">
      <h1 className="page-title">Fixtures & Results</h1>
      <p className="page-desc">Upcoming games and recent round results.</p>

      {fixtures.map((round) => (
        <section key={round.round} className="round-section">
          <h2 className={`round-title ${round.status}`}>{round.label}</h2>
          <div className="games-list">
            {round.games.map((game, idx) => (
              <div key={idx} className={`game-card ${round.status}`}>
                {round.status === 'upcoming' ? (
                  <>
                    <div className={`team-name ${game.winner === 'home' ? 'winner' : ''}`}>
                      {game.home}
                    </div>
                    <div className="vs-block">
                      <span className="vs-label">vs</span>
                      <span className="game-time">{game.time}</span>
                      <span className="game-venue">📍 {game.venue}</span>
                    </div>
                    <div className={`team-name ${game.winner === 'away' ? 'winner' : ''}`}>
                      {game.away}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`team-result ${game.winner === 'home' ? 'winner' : 'loser'}`}>
                      <span className="result-team">{game.home}</span>
                      <span className="result-score">{game.homeScore}</span>
                    </div>
                    <div className="def-label">def.</div>
                    <div className={`team-result ${game.winner === 'away' ? 'winner' : 'loser'}`}>
                      <span className="result-team">{game.away}</span>
                      <span className="result-score">{game.awayScore}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Fixtures
