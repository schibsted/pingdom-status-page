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

  if(avg >= 99) {
    return <strong className="green">awesome</strong>
  } else if(avg >= 90) {
    return <strong className="green">okay</strong>
  } else {
    return <strong className="red">bad</strong>
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
      <h1 className="awesome-meter">Everything is <div className="percent">{avg.toFixed(3)}%</div> {isItAwsome(avg)} 🎉</h1>
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
          font-family: monospace;
        }
        .green {
          color: green;
        }
        .blue {
          color: blue;
        }
        .red {
          color: red;
        }
        .percent {
          font-weight: bold;
          display: inline-block;
          background: rgba(0, 0, 0, 0.2);
          padding: 5px 9px;
          border-bottom: 3px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          margin-bottom: 1rem;
        }
      `}
      </style>
    </>
  );
});
