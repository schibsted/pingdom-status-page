const PINGDOM_FEATURED_CHECKS = process.env.PINGDOM_FEATURED_CHECKS.split(',');

import db from '../lib/db';
import pingdom from '../lib/pingdom';

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS sites`);
  db.run(`CREATE TABLE sites (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    status TEXT NOT NULL,
    uptime NUMERIC,
    downtime NUMERIC,
    unknowntime NUMERIC
  )`);
});

pingdom.checks(PINGDOM_FEATURED_CHECKS).then(checks => {
  checks.map(check => {
    pingdom.uptime(check.id).then(uptime => {
      db.run(`INSERT INTO sites (id, name, status, uptime, downtime, unknowntime)
        VALUES ($id, $name, $status, $uptime, $downtime, $unknowntime)`, {
        $id: check.id,
        $name: check.name,
        $status: check.status,
        $uptime: uptime.summary.status.totalup,
        $downtime: uptime.summary.status.totaldown,
        $unknowntime: uptime.summary.status.totalunknown
      });

      console.log(`Updated ${check.name}`);
    });
  });
});
