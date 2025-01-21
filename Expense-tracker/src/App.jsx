import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Auth } from './pages/auth'
import { Dashboard } from './pages/dashboard'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Routes path='/' element={<Dashboard />} />
          <Route path='/' element={<Auth />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
