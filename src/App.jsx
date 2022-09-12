import { useState } from 'react';
import Header from './Header/Header'
import ActivityList from './ActivityList/ActivityList';
import Footer from './Footer/Footer'
import './App.css';
import data from './data.json';

function App() {

  const timeframeOptions = Object.keys(data[0].timeframes);
  const [timeframe, setTimeframe] = useState(timeframeOptions[0]);

  return (
    <div className="App"> 
      <Header setTimeframe={setTimeframe} timeframe={timeframe}timeframeOptions={timeframeOptions}/>
      <ActivityList data={data} timeframe={timeframe}/>
      <Footer />
    </div>
  );
}

export default App;