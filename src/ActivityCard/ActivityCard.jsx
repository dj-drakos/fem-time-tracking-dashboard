import {formatTime, formatPrevDescription} from '../utils/utils'
import './ActivityCard.css'

export default function ActivityCard({item, timeframe}) {
  const {title, timeframes} = item;

  return (
    <li className={`activity-card ${title.toLowerCase().replace(' ', '-')}`}>
      <div className="activity-card-data">
        <h2>{title}</h2>
        <img src="./images/icon-ellipsis.svg" alt="More Information" />
        <p>{formatTime(timeframes[timeframe]?.current)}</p>
        <p>{formatPrevDescription(timeframe)} - {formatTime(timeframes[timeframe]?.previous)}</p>
      </div>
    </li>
  )
}