import { useState, useEffect } from 'react'
import vnaj_photo from './assets/vnaj.jpg'
import './App.css'

function Fullname({Firstname, Lastname}) {
  return <h1>{Firstname} {Lastname}</h1>
}

function App() {
  const [cvInfo, setCvInfo] = useState(null)

  

  useEffect(() => {
    fetch('/src/data/default.cv.json').then(res => res.json())
      .then(setCvInfo);
  }, []);

  return (
    <div className="App" style={{backgroundColor: '#242424'}}>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={vnaj_photo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Fullname {...cvInfo?.PersonalInfo}/>
      <div className="card">
        <button onClick={() => alert("Contacting...")}>
          Contact Me
        </button>
      </div>
      <div className="card">
        <button id="pdf" onClick={() => {
          document.getElementById('pdf').onclick = function () {
            var cv = document.getElementById('root');
            var options = {
              margin: 1,
              filename: "vnaj.cv.pdf",
              image: { type: "jpeg", quality: 0.98},
              html2canvas: {scale: 2},
              jsPDF: { unit: 'in', format: 'letter', orientation: "portrait"}
            };
    
            html2pdf(cv, options);
          };
        }}>PDF</button>
      </div>
    </div>
  )
}

export default App
