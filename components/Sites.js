import React, { useState, useEffect } from 'react';

import Site from './Site';
import AwesomeMeter from './AwesomeMeter';

export default function Sites(props) {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await fetch('/api/data');
      if (!req.ok) {
        setSites([]);
      }
      const data = await req.json();
      setSites(data);
    })();
  }, []);

  return (
    <div>
      <AwesomeMeter sites={sites} />
      <div className="sites">
        {sites.map(site => (
          <Site
            key={site.id}
            name={site.name}
            status={site.status}
            uptime={site.uptime}
            downtime={site.downtime}
            unknowntime={site.unknowntime}
          />
        ))}
      </div>

      <style jsx>{`
      `}</style>
    </div>
  );
}
