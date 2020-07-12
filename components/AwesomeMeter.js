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

const allUp = (sites) => sites.every(({ status }) => status === 'up');

export default memo(({ sites }) => {
  const avg = sites.map(({ uptime, downtime, unknowntime }) => {
    return formatPercent(
        uptime / (uptime + downtime + unknowntime) * 100
    );
  }).reduce((sum, value) => sum + value, 0) / sites.length;

  let header = (
      <h1 className="awesome-meter">Everything is {isItAwsome(avg)} {Math.floor(avg)}%</h1>
  );

  if (!allUp(sites)) {
    header = <h1 className="awesome-meter">Some sites are down 😱</h1>
  }

  if (isNaN(avg)) {
    header = null;
  }

  return (
    <>
      {header}
      <style jsx global>{`
        .awesome-meter {
          text-align: center;
        }
        .green {
          color: green;
        }
        .blue {
          color: blue;
        }
      `}
      </style>
    </>
  );
});
