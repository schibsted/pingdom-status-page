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
    return <strong className="green">
      <div className="letter letter-1">a</div>
      <div className="letter letter-2">w</div>
      <div className="letter letter-3">e</div>
      <div className="letter letter-4">s</div>
      <div className="letter letter-5">o</div>
      <div className="letter letter-6">m</div>
      <div className="letter letter-7">e</div>
    </strong>
  } else if(avg >= 90) {
    return <strong className="green">
      <div className="letter letter-1">o</div>
      <div className="letter letter-2">k</div>
      <div className="letter letter-3">a</div>
      <div className="letter letter-4">y</div>
    </strong>
  } else {
    return <strong className="red">
      <div className="letter letter-1">b</div>
      <div className="letter letter-2">a</div>
      <div className="letter letter-3">d</div>
    </strong>
  }
}

const allUp = (sites) => sites.every(({ status }) => status === 'up');

export default memo(({ sites }) => {
  const avg = sites.map(({ uptime, downtime }) => {
    return formatPercent(
        uptime / (uptime + downtime) * 100
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

        .letter {
          display: inline-block;
          animation: bounce 5s infinite ease-in-out;
        }

        .letter-1 { animation-delay: 0.0s }
        .letter-2 { animation-delay: 0.1s }
        .letter-3 { animation-delay: 0.2s }
        .letter-4 { animation-delay: 0.3s }
        .letter-5 { animation-delay: 0.4s }
        .letter-6 { animation-delay: 0.5s }
        .letter-7 { animation-delay: 0.6s }

        @keyframes bounce {
          5% { transform: translate(0, 0); }
          10% { transform: translate(0, -5px); }
          15% { transform: translate(0, 0); }
        }
      `}
      </style>
    </>
  );
});
