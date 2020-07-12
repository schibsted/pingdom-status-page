export default async (req, res) => {
  res.statusCode = 200;
  res.json({
      health: '100%',
  });
}

