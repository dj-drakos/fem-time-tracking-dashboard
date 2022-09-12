import {formatTime, formatPrevDescription} from '../utils/utils'
import './ActivityCard.css'

export default function ActivityCard({item, timeframe}) {
  const {title, timeframes} = item;

  return (
    <li className={`activity-card ${title.toLowerCase().replace(' ', '-')}`}>
      <div className="activity-card-data">
        <h2>{title}</h2>
        <div className="svg">
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path class="ellipsis" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
        </div>
        <p>{formatTime(timeframes[timeframe]?.current)}</p>
        <p>{formatPrevDescription(timeframe)} - {formatTime(timeframes[timeframe]?.previous)}</p>
      </div>
    </li>
  )
}