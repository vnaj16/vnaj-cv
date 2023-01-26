import { useState } from 'react'
import vnaj_photo from './assets/vnaj.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{backgroundColor: 'red'}}>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={vnaj_photo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>VNAJ</h1>
      <div className="card">
        <button onClick={() => alert("Contacting...")}>
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default App
