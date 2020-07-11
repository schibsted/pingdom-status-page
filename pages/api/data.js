import db from '../../lib/db';

export default async (req, res) => {
  const sites = await new Promise((resolve, reject) => {
    db.all('SELECT * FROM sites ORDER BY position ASC', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

  res.statusCode = 200;
  res.json(sites);
}
