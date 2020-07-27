import db from '../../lib/db';

export default async (req, res) => {
  const sites = await new Promise((resolve, reject) => {
    db.all('SELECT * FROM sites ORDER BY position ASC', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

  const days = await new Promise((resolve, reject) => {
    db.all('SELECT * FROM days', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

  const response = sites.map(site => {
    return {
      ...site,
      days: days.filter(day => day.siteid == site.id)
    }
  });

  res.statusCode = 200;
  res.json(response);
}
