import { memo } from 'react';
const formatPercent = (value) => {
  if (value < 100) {
    return parseFloat(value);
  } else {
    return 100;
  }
}

const isItAwsome = (avg) => {
  if (isNaN(avg)) {
    return '';
  }
  if (avg >= 90) {
    return <strong className="green">awesome</strong>
  } else {
    return <strong className="blue">OK</strong>
  }
}

export default memo(({ sites }) => {
  const avg = sites.map(({ uptime, downtime, unknowntime }) => {
    return formatPercent(
        uptime / (uptime + downtime + unknowntime) * 100
    );
  }).reduce((sum, value) => sum + value, 0) / sites.length;

  return (
    <>
      <h1 className="awesome-meter">Everything is {isItAwsome(avg)} {Math.floor(avg)}%</h1>
      <style jsx>{`
        .awesome-meter {
          text-align: center;
        }
      `}
      </style>
    </>
  );
});
