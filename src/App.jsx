import './App.css';

function App() {
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
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className='activity-card work'>
        <img className ="card-banner" src="./images/icon-work.svg" alt="More Information" />
        <div className="activity-card-data">
          <h2 className ="one">Work</h2>
          <img className ="two" src="./images/icon-ellipsis.svg" alt="More Information" />
          <p className ="three">5hrs</p>
          <p className ="four">Previous - 7hrs</p>
        </div>
        </section>

        <section className='activity-card'>
          <h2 className="one">Play</h2>
          <img className="two" src="./images/icon-ellipsis.svg" alt="More Information" />
          <p className="three">5hrs</p>
          <p className="four">Previous - 7hrs</p>
        </section>

        <section className='activity-card'>
          <h2 className="one">Study</h2>
          <img className="two" src="./images/icon-ellipsis.svg" alt="More Information" />
          <p className="three">5hrs</p>
          <p className="four">Previous - 7hrs</p>
        </section>

        <section className='activity-card'>
          <h2 className ="one">Exercise</h2>
          <img className ="two" src="./images/icon-ellipsis.svg" alt="More Information" />
          <p className ="three">5hrs</p>
          <p className ="four">Previous - 7hrs</p>
        </section>

        <section className='activity-card'>
          <h2 className ="one">Social</h2>
          <img className ="two" src="./images/icon-ellipsis.svg" alt="More Information" />
          <p className ="three">5hrs</p>
          <p className ="four">Previous - 7hrs</p>
        </section>

        <section className='activity-card'>
          <h2 className ="one">Self Care</h2>
          <img className ="two" src="./images/icon-ellipsis.svg" alt="More Information" />
          <p className ="three">5hrs</p>
          <p className ="four">Previous - 7hrs</p>
        </section>
      </main>
      
      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/dj-drakos">DJ Drakos</a>.
      </footer>
    </div>
  );
}

export default App;
