import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Teams from './pages/Teams'
import Ladder from './pages/Ladder'
import Fixtures from './pages/Fixtures'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/ladder" element={<Ladder />} />
          <Route path="/fixtures" element={<Fixtures />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2024 AFL Hunter · Junior AFL Football</p>
      </footer>
    </div>
  )
}

export default App
