export default function Site(props) {
  const percent = (props.uptime / (props.uptime + props.downtime + props.unknowntime) * 100).toFixed(3);

  return (
    <div>
      <div className="site">
        <h3>{props.name}</h3>
        <div className="percent">{percent}</div>
        <div className="uptime">{props.uptime}</div>
        <div className="downtime">{props.downtime}</div>
        <div className="unknowntime">{props.unknowntime}</div>
      </div>

      <style jsx>{`
        .site {
          background: rgba(0, 0, 0, 0.025);
          padding: 25px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}
