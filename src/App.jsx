import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="./images/image-jeremy.png" alt="Jeremy Robson" />
        <p>Report for</p>
        <h1>Jeremy Robson</h1>

        <nav>
          <ul>
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Work</h2>
          <img src="./images/icon/ellipses.svg" alt="More Information" />
          <p>5hrs</p>
          <p>Previous - 7hrs</p>
        </section>

        <section>
        <h2>Play</h2>
          <img src="./images/icon/ellipses.svg" alt="More Information" />
          <p>5hrs</p>
          <p>Previous - 7hrs</p>
        </section>

        <section>
        <h2>Study</h2>
          <img src="./images/icon/ellipses.svg" alt="More Information" />
          <p>5hrs</p>
          <p>Previous - 7hrs</p>
        </section>

        <section>
        <h2>Exercise</h2>
          <img src="./images/icon/ellipses.svg" alt="More Information" />
          <p>5hrs</p>
          <p>Previous - 7hrs</p>
        </section>

        <section>
        <h2>Social</h2>
          <img src="./images/icon/ellipses.svg" alt="More Information" />
          <p>5hrs</p>
          <p>Previous - 7hrs</p>
        </section>

        <section>
        <h2>Self Care</h2>
            <img src="./images/icon/ellipses.svg" alt="More Information" />
            <p>5hrs</p>
            <p>Previous - 7hrs</p>
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
