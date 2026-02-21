import ladder from '../data/ladder'
import './Ladder.css'

function Ladder() {
  return (
    <div className="ladder-page">
      <h1 className="page-title">AFL Ladder</h1>
      <p className="page-desc">2024 Season standings after Round 22.</p>
      <div className="ladder-table-wrapper">
        <table className="ladder-table">
          <thead>
            <tr>
              <th>#</th>
              <th className="team-col">Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>Pts</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {ladder.map((row) => (
              <tr
                key={row.rank}
                className={
                  row.rank <= 8 ? 'finals-zone' : ''
                }
              >
                <td className="rank-cell">{row.rank}</td>
                <td className="team-name-cell">{row.team}</td>
                <td>{row.played}</td>
                <td className="win-cell">{row.wins}</td>
                <td className="loss-cell">{row.losses}</td>
                <td>{row.draws}</td>
                <td className="pts-cell">{row.points}</td>
                <td>{row.percentage.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="finals-note">🟢 Top 8 qualify for finals</p>
    </div>
  )
}

export default Ladder
