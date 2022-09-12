import { useState } from 'react';
import ActivityCard from './ActivityCard/ActivityCard';
import Header from './Header/Header'
import './App.css';
import data from './data.json';

function App() {

  const timeframes = Object.keys(data[0].timeframes);
  const [timeframe, setTimeframe] = useState(timeframes[0]);

  return (
    <div className="App"> 
      <Header setTimeframe={setTimeframe} timeframe={timeframe}timeframes={timeframes}/>

      <main>
        <ul>
        {data.map(item => <ActivityCard key={item.title} item={item} timeframe={timeframe}/>
          )}
        </ul>
      </main>
      
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/dj-drakos">DJ Drakos</a>.
      </footer>
    </div>
  );
}

export default App;
