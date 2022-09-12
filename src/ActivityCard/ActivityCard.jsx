import './ActivityCard.css'

export default function ActivityCard({item, timeframe}) {
  const {title, timeframes} = item;

  function formatTime(time) {
    if(time === 1) return `${time} hr`;
    if(!time) return '0 hrs';
    else return `${time} hrs`;
  }

  function formatPrevDescription() {
    if(timeframe === 'daily') return 'Yesterday';
    else if(timeframe === 'weekly') return 'Last Week';
    else if(timeframe === 'monthly') return 'Last Month';
    else return 'Last Period';
  }

  return (
    <section key={title} className={`activity-card ${title.toLowerCase().replace(' ', '-')}`}>
            <div className="activity-card-data">
              <h2>{title}</h2>
              <img src="./images/icon-ellipsis.svg" alt="More Information" />
              <p>{formatTime(timeframes[timeframe]?.current)}</p>
              <p>{formatPrevDescription()} - {formatTime(timeframes[timeframe]?.previous)}</p>
            </div>
          </section>
  )
}
