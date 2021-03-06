const formatPercent = (value) => {
  if (value < 100) {
    return value.toFixed(3);
  } else {
    return 100;
  }
}

export default function Site(props) {
  const percent = formatPercent(
    props.uptime / (props.uptime + props.downtime)
  * 100);

  return (
    <div>
      <div className="site">
        <div className="name">
          <div className="value">{props.name}</div>
          <div className={"status " + props.status}>{props.status}</div>
        </div>

        <div className="days">
          {props.days.map((day, i) =>
            <div className={`day ${day.downtime > 0 ? "downtime" : ""}`}>
              <div className="bar">&nbsp;</div>
              <div className="day-details">
                <div className="day-time">{ new Date(day.starttime * 1000).toLocaleDateString('en-GB') }</div>
                <div className="day-downtime">{day.downtime / 60} min down</div>
              </div>
            </div>
          )}
        </div>

        <div className="details">
          <div className="detail uptime">
            <div className="label">Up</div>
            <div className="value">{percent}%</div>
          </div>

          <div className="detail downtime">
            <div className="label">Down</div>
            <div className="value">{props.downtime / 60} min</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site {
          font-family: monospace;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem;
          margin-bottom: 1rem;
          background: rgba(255, 255, 255, 0.01);
          border: 2px solid rgba(255, 255, 255, 0.04);
          border-radius: 5px;
          font-size: 1.3rem;
          color: #fff;
        }

        .days {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-end;
          width: 30%;
          background: rgba(0, 0, 0, 0.2);
          padding: 0.4rem;
          border-radius: 5px;
          cursor: pointer;
        }

        .days .day {
          position: relative;
          width: 1.23%;
          margin: 0 1%;
        }

        .days .day .bar {
          border: 2px solid hsla(120, 100%, 25%, 1);
          border-bottom: 3px solid rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          background: hsla(120, 100%, 25%, 1);
          transform: scale(1.0);
        }

        .days .day .bar:hover {
          border-color: hsla(120, 100%, 35%, 1);
          border-bottom-color: rgba(0, 0, 0, 0.3);
          background-color: hsla(120, 100%, 35%, 1);
          transform: scale(1.2);
        }

        .days .day.downtime .bar {
          border-color: hsla(358, 84%, 53%, 1);
          background: hsla(358, 84%, 53%, 1);
        }

        .days .day.downtime .bar:hover {
          border-color: hsla(358, 95%, 57%, 1);
          background: hsla(358, 95%, 57%, 1);
        }

        .days .day .day-details {
          position: absolute;
          top: 30px;
          left: -75px;
          display: none;
          background: rgba(0, 0, 0, 0.9);
          border-radius: 8px;
          padding: 0.7rem;
          width: 150px;
          z-index: 1000;
          text-align: center;
          font-size: 0.9rem;
        }

        .days .day:hover .day-details {
          display: block;
        }

        .days .day .day-time {
          font-weight: bold;
          margin-bottom: 0.3rem;
        }

        .name {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }

        .name .value {
          flex-grow: 1;
          width: 15rem;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          text-transform: uppercase;
        }

        .name .value,
        .status {
          font-weight: bold;
          background: rgba(0, 0, 0, 0.2);
          padding: 0.1rem 0.8rem;
          border-bottom: 3px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          line-height: 2rem;
        }

        .status {
          text-align: center;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          text-transform: uppercase;
          font-size: 1rem;
          width: 5rem;
        }

        .status.up {
          background: hsla(120, 100%, 25%, 1);
          color: #fff;
          animation: green-pulse 1.5s infinite alternate ease-in-out;
        }

        @keyframes green-pulse {
          0% {
            background: hsla(120, 100%, 25%, 1);
          }
          80% {
            background: hsla(120, 100%, 25%, 1);
          }
          100% {
            background: hsla(120, 100%, 28%, 1);
          }
        }

        .status.down {
          background: hsla(358, 84%, 53%, 1);
          color: #fff;
          animation: red-pulse 0.75s infinite alternate ease-in-out;
        }

        @keyframes red-pulse {
          0% {
            background: hsla(358, 84%, 53%, 1);
          }
          80% {
            background: hsla(358, 84%, 53%, 1);
          }
          100% {
            background: hsla(358, 100%, 60%, 1);
          }
        }

        .details {
          display: flex;
          flex-direction: row-reverse;
          flex-wrap: nowrap;
          align-items: center;
          font-size: 0.9rem;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }

        .details .uptime,
        .details .downtime {
          font-weight: bold;
          display: inline-block;
          border-radius: 3px;
        }

        .details .detail {
          margin-right: 1rem;
        }

        .details .detail:last-of-type {
          margin-right: 0;
          border-right: 0;
        }

        .details .detail .label,
        .details .detail .value {
          padding: 5px 7px;
          display: inline-block;
          border-radius: 3px;
        }

        .details .detail .label {
          border-bottom: 3px solid rgba(0, 0, 0, 0.3);
          background: rgba(0, 0, 0, 0.2);
          color: rgba(255, 255, 255, 0.4);
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .details .detail .value {
          border-bottom: 3px solid rgba(0, 0, 0, 0.3);
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          min-width: 5rem;
        }

        @media (max-width: 1000px) {
          .site {
            flex-wrap: wrap;
          }

          .name {
            width: 100%;
            margin-bottom: 0.8rem;
          }

          .days {
            width: 100%;
            margin-bottom: 0.8rem;
          }

          .details {
            width: 100%;
            justify-content: flex-start;
          }
        }

      `}</style>
    </div>
  );
}
