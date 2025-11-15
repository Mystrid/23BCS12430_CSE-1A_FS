import { useState } from 'react'
import './App.css'
import Welcome from './Welcome'

function App() {
  const [visitorName, setVisitorName] = useState('')

  return (
    <div className="app" style={{ padding: 16 }}>
      <h1>Greeting App</h1>
      <label htmlFor="visitor-name" style={{ display: 'block', marginBottom: 8 }}>
        Who are you?
      </label>
      <input
        id="visitor-name"
        type="text"
        value={visitorName}
        onChange={(event) => setVisitorName(event.target.value)}
        placeholder="Enter your name"
        style={{ marginBottom: 200, padding: 8, width: '100%', maxWidth: 280 }}
      />
      <div style={{ fontSize: 24, fontWeight: 'bold' }}>
        <Welcome name={visitorName} />
      </div>
    </div>
  )
}

export default App
