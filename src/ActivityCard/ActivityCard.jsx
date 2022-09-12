import './ActivityCard.css'

export default function ActivityCard({item, timeframe}) {

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
    <section key={item.title} className={`activity-card ${item.title.toLowerCase().replace(' ', '-')}`}>
            <div className="activity-card-data">
              <h2>{item.title}</h2>
              <img src="./images/icon-ellipsis.svg" alt="More Information" />
              <p>{formatTime(item.timeframes[timeframe]?.current)}</p>
              <p>{formatPrevDescription()} - {formatTime(item.timeframes[timeframe]?.previous)}</p>
            </div>
          </section>
  )
}
