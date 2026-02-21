import teams from '../data/teams'
import './Teams.css'

function Teams() {
  return (
    <div className="teams-page">
      <h1 className="page-title">AFL Teams</h1>
      <p className="page-desc">All 18 AFL clubs competing in the 2024 season.</p>
      <div className="teams-grid">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card"
            style={{ borderLeft: `6px solid ${team.primary}` }}
          >
            <div
              className="team-badge"
              style={{ backgroundColor: team.primary, color: team.secondary }}
            >
              {team.abbr}
            </div>
            <div className="team-info">
              <h3 className="team-name">{team.name}</h3>
              <div className="team-colors">
                <span className="color-dot" style={{ backgroundColor: team.primary }} title="Primary" />
                <span className="color-dot" style={{ backgroundColor: team.secondary, border: '1px solid #ccc' }} title="Secondary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams
