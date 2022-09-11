import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {

  const timeframes = Object.keys(data[0].timeframes);
  const [timeframe, setTimeframe] = useState('daily');

  function handleClick(value) {
    setTimeframe(value);
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
            {timeframes.map(item => <li key={item} onClick={() => handleClick(item)}>{item}</li>)}
          </ul>
        </nav>
      </header>

      <main>
        <section className='activity-card work'>
        <div className="activity-card-data">
          <h2>{data[0].title}</h2>
          <img src="./images/icon-ellipsis.svg" alt="More Information" />
          <p>{data[0].timeframes.daily.current} hrs</p>
          <p>Yesterday - {data[0].timeframes.daily.previous} hrs</p>
        </div>
        </section>

        <section className='activity-card play'>
          <div className="activity-card-data">
            <h2>Play</h2>
            <img src="./images/icon-ellipsis.svg" alt="More Information" />
            <p>5hrs</p>
            <p>Previous - 7hrs</p>
          </div>
        </section>

        <section className='activity-card study'>
          <div className="activity-card-data">
            <h2>Study</h2>
            <img src="./images/icon-ellipsis.svg" alt="More Information" />
            <p> 5hrs</p>
            <p>Previous - 7hrs</p>
          </div>
        </section>

        <section className='activity-card exercise'>
          <div className="activity-card-data">
            <h2 >Exercise</h2>
            <img src="./images/icon-ellipsis.svg" alt="More Information" />
            <p>5hrs</p>
            <p>Previous - 7hrs</p>
          </div>
        </section>

        <section className='activity-card social'>
          <div className="activity-card-data">
            <h2 >Social</h2>
            <img src="./images/icon-ellipsis.svg" alt="More Information" />
            <p>5hrs</p>
            <p>Previous - 7hrs</p>
          </div>
        </section>

        <section className='activity-card self-care'>
            <div className="activity-card-data">
            <h2 >Self Care</h2>
            <img src="./images/icon-ellipsis.svg" alt="More Information" />
            <p>5hrs</p>
            <p>Previous - 7hrs</p>
          </div>
        </section>
      </main>
      
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/dj-drakos">DJ Drakos</a>.
      </footer>
    </div>
  );
}

export default App;
