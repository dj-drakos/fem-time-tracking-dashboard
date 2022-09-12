function formatTime(time) {
  if(time === 1) return `${time} hr`;
  if(!time) return '0 hrs';
  else return `${time} hrs`;
}

function formatPrevDescription(timeframe) {
  if(timeframe === 'daily') return 'Yesterday';
  else if(timeframe === 'weekly') return 'Last Week';
  else if(timeframe === 'monthly') return 'Last Month';
  else return 'Last Period';
}

export {formatTime, formatPrevDescription};