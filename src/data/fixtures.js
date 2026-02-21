const fixtures = [
  {
    round: 23,
    label: 'Round 23 — Upcoming',
    status: 'upcoming',
    games: [
      { home: 'Collingwood',      away: 'Carlton',            time: 'Fri 8:00pm',  venue: 'MCG' },
      { home: 'Brisbane Lions',   away: 'GWS Giants',         time: 'Sat 2:00pm',  venue: 'Gabba' },
      { home: 'Geelong Cats',     away: 'Melbourne',          time: 'Sat 4:30pm',  venue: 'GMHBA Stadium' },
      { home: 'Sydney Swans',     away: 'Hawthorn',           time: 'Sat 7:25pm',  venue: 'SCG' },
      { home: 'Port Adelaide',    away: 'Richmond',           time: 'Sun 1:00pm',  venue: 'Adelaide Oval' },
      { home: 'Essendon',         away: 'Western Bulldogs',   time: 'Sun 3:20pm',  venue: 'Marvel Stadium' },
      { home: 'Adelaide Crows',   away: 'Fremantle',          time: 'Sun 4:40pm',  venue: 'Adelaide Oval' },
      { home: 'St Kilda',         away: 'Gold Coast Suns',    time: 'Sun 7:10pm',  venue: 'Marvel Stadium' },
      { home: 'North Melbourne',  away: 'West Coast Eagles',  time: 'Sun 4:40pm',  venue: 'Marvel Stadium' },
    ],
  },
  {
    round: 22,
    label: 'Round 22 — Results',
    status: 'completed',
    games: [
      { home: 'Collingwood',      homeScore: '15.12 (102)', away: 'Brisbane Lions',   awayScore: '11.8 (74)',  winner: 'home' },
      { home: 'Carlton',          homeScore: '13.9 (87)',   away: 'GWS Giants',        awayScore: '12.11 (83)', winner: 'home' },
      { home: 'Geelong Cats',     homeScore: '16.14 (110)', away: 'Sydney Swans',      awayScore: '10.7 (67)',  winner: 'home' },
      { home: 'Hawthorn',         homeScore: '11.13 (79)',  away: 'Port Adelaide',     awayScore: '10.15 (75)', winner: 'home' },
      { home: 'Melbourne',        homeScore: '14.8 (92)',   away: 'Richmond',          awayScore: '9.6 (60)',   winner: 'home' },
      { home: 'Western Bulldogs', homeScore: '12.10 (82)',  away: 'Essendon',          awayScore: '11.9 (75)',  winner: 'home' },
      { home: 'Fremantle',        homeScore: '14.6 (90)',   away: 'Adelaide Crows',    awayScore: '12.8 (80)',  winner: 'home' },
      { home: 'Gold Coast Suns',  homeScore: '15.11 (101)', away: 'St Kilda',          awayScore: '9.7 (61)',   winner: 'home' },
      { home: 'West Coast Eagles',homeScore: '10.11 (71)',  away: 'North Melbourne',   awayScore: '8.9 (57)',   winner: 'home' },
    ],
  },
]

export default fixtures
