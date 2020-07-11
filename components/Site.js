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
          padding: 25px;
          margin-bottom: 15px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.15);
          background: white;
          border-radius: 5px;
          font-size: 1.3rem;
        }

        .name .value {
          min-width: 12rem;
        }

        .name .value,
        .status {
          font-weight: bold;
          display: inline-block;
          background: rgba(0, 0, 0, 0.04);
          padding: 5px 9px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.08);
          border-radius: 3px;
        }

        .status {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        .status {
          background: green;
          color: #fff;
        }

        .details {
          display: flex;
          flex-direction: row-reverse;
          flex-wrap: nowrap;
          align-items: center;
          font-size: 1rem;
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
          border-bottom: 2px solid rgba(0, 0, 0, 0.08);
          background: rgba(0, 0, 0, 0.04);
          color: rgba(0, 0, 0, 0.6);
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .details .detail .value {
          border-bottom: 2px solid rgba(0, 0, 0, 0.95);
          background: rgba(0, 0, 0, 0.75);
          color: #fff;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

      `}</style>
    </div>
  );
}
