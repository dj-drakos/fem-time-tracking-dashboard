import './Header.css'

export default function Header({setTimeframe, timeframe, timeframeOptions}) {
  return (
    <header>
      <section className="profile">
        <img src="./images/image-jeremy.png" alt="Jeremy Robson" />
        <div className='info'>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </section>

      <nav>
        <ul className="nav">
          {timeframeOptions.map(item => <li key={item} className={timeframe === item ? 'selected' : undefined}onClick={() => setTimeframe(item)}>{item}</li>)}
        </ul>
      </nav>
    </header>
  )
}
