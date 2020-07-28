module.exports = {
  async headers() {
    return [
      {
        source: '/api/data',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, must-revalidate, max-age=60'
          }
        ]
      }
    ]
  }
}
