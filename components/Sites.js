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
    <div>
      <div className="summary">
        Everything is awesome!
      </div>
      
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
        
        .summary {
          text-align: center;
          font-weight: bold;
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

      `}</style>
    </div>
  );
}
