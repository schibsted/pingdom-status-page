import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Site from './Site';

export default function Sites(props) {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    axios.get(
      '/api/data'
    ).then(response => {
      setSites(response.data);
    });
  }, []);

  return (
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
  );
}
