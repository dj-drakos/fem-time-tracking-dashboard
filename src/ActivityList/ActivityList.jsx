import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityList.css';

export default function ActivityList({data, timeframe}) {
  return (
    <main>
      <ul className="activity-list">
      {data.map(item => <ActivityCard key={item.title} item={item} timeframe={timeframe}/>
        )}
      </ul>
    </main>
  )
}
