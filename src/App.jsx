import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {

  const timeframes = Object.keys(data[0].timeframes);
  const [timeframe, setTimeframe] = useState('daily');

  function formatTime(time) {
    if(time === 1) return `${time} hr`;
    else return `${time} hrs`
  }

  function formatPrevDescription() {
    if(timeframe === 'daily') return 'Yesterday';
    else if(timeframe === 'weekly') return 'Last Week';
    else if(timeframe === 'monthly') return 'Last Month';
    else return 'Last Period';
  }

  return (
    <div className="App"> 
      <header>
        <section className="profile">
          <img src="./images/image-jeremy.png" alt="Jeremy Robson" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </section>

        <nav>
          <ul>
            {timeframes.map(item => <li key={item} onClick={() => setTimeframe(item)}>{item}</li>)}
          </ul>
        </nav>
      </header>

      <main>
        {data.map(item => (
          <section key={item.title} className={`activity-card ${item.title.toLowerCase().replace(' ', '-')}`}>
            <div className="activity-card-data">
              <h2>{item.title}</h2>
              <img src="./images/icon-ellipsis.svg" alt="More Information" />
              <p>{formatTime(item.timeframes[timeframe].current)}</p>
              <p>{formatPrevDescription()} - {formatTime(item.timeframes[timeframe].previous)}</p>
            </div>
          </section>
        ))}
      </main>
      
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/dj-drakos">DJ Drakos</a>.
      </footer>
    </div>
  );
}

export default App;
