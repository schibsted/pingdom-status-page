const PINGDOM_FEATURED_CHECKS = process.env.PINGDOM_FEATURED_CHECKS.split(',');

import db from '../lib/db';
import pingdom from '../lib/pingdom';

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS sites`);
  db.run(`DROP TABLE IF EXISTS days`);
  db.run(`CREATE TABLE sites (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    status TEXT NOT NULL,
    uptime NUMERIC,
    downtime NUMERIC,
    unknowntime NUMERIC,
    position NUMERIC
  )`);
  db.run(`CREATE TABLE days (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    siteid NUMERIC,
    starttime NUMERIC,
    avgresponse NUMERIC,
    uptime NUMERIC,
    downtime NUMERIC
  )`);
});

pingdom.checks(PINGDOM_FEATURED_CHECKS).then(checks => {
  checks.map(check => {
    pingdom.uptime(check.id).then(uptime => {
      db.run(`INSERT INTO sites (id, name, status, uptime, downtime, unknowntime, position)
        VALUES ($id, $name, $status, $uptime, $downtime, $unknowntime, $position)`, {
        $id: check.id,
        $name: check.name,
        $status: check.status,
        $uptime: uptime.summary.status.totalup,
        $downtime: uptime.summary.status.totaldown,
        $unknowntime: uptime.summary.status.totalunknown,
        $position: PINGDOM_FEATURED_CHECKS.indexOf(check.name)
      });

      pingdom.days(check.id).then(response => {
        response.summary.days.forEach(day => {
          db.run(`INSERT INTO days (siteid, starttime, avgresponse, uptime, downtime)
            VALUES ($siteid, $starttime, $avgresponse, $uptime, $downtime)`, {
            $siteid: check.id,
            $starttime: day.starttime,
            $avgresponse: day.avgresponse,
            $uptime: day.uptime,
            $downtime: day.downtime
          });
        });
      }).catch(err => console.log(err.response));

      console.log(`Updated ${check.name}`);
    }).catch(err => console.log(err.response));
  });
});
