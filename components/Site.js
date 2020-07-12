const formatPercent = (value) => {
  if (value < 100) {
    return value.toFixed(3);
  } else {
    return 100;
  }
}

export default function Site(props) {
  const percent = formatPercent(
    props.uptime / (props.uptime + props.downtime + props.unknowntime)
  * 100);

  return (
    <div>
      <div className="site">
        <div className="name">
          <div className="value">{props.name}</div>
          <div className={"status " + props.status}>{props.status}</div>
        </div>
        <div className="details">
          <div className="detail uptime">
            <div className="label">Up</div>
            <div className="value">{percent}%</div>
          </div>

          <div className="detail downtime">
            <div className="label">Down</div>
            <div className="value">{props.downtime} min</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site {
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
          margin: 1rem;
        }

        .name .value {
          min-width: 12rem;
        }

        .name .value,
        .status {
          font-weight: bold;
          display: inline-block;
          background: rgba(0, 0, 0, 0.2);
          padding: 5px 9px;
          border-bottom: 3px solid rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }

        .status {
          text-align: center;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
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
          background: #EC2027;
          color: #fff;
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

        @media (max-width: 600px) {
          .site {
            flex-wrap: wrap;
          }

          .name {
            display: block;
            width: 100%;
            margin-bottom: 0.8rem;
          }

          .name .value {
            width: 75%;
          }

          .name .status {
            width: 25%;
          }
        }

      `}</style>
    </div>
  );
}
