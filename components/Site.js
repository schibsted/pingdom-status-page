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
        <h3 className="name">{props.name}</h3>
        <div className="status">
          <div className={"value " + props.status}>{props.status}</div>
        </div>
        <div className="details">
          Up <div className="percent">{percent}%</div> last 30 days
          (down <div className="downtime">{props.downtime}</div> min)
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
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          background: white;
          border-radius: 5px;
        }

        .name {
          width: 20%;
        }

        .status {
          display: inline-block;
          position: relative;
          background: green;
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 500px;
          font-size: 1.3rem;
          color: white;
          text-align: center;
          margin-right: 2rem;
        }

        .status .value {
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-transform: uppercase;
          font-weight: bold;
        }

        .status .value.up {
          color: #fff;
        }

        .status .value.down {
          color: #fff;
        }

        .details {
          width: 50%;
          text-align: right;
          display: inline-block;
        }

        .details .percent,
        .details .downtime {
          font-weight: bold;
          display: inline-block;
          background: rgba(0, 0, 0, 0.04);
          padding: 5px 7px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.08);
          border-radius: 3px;
        }

      `}</style>
    </div>
  );
}
