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
      },
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, must-revalidate, max-age=60'
          }
        ]
      },
      {
        source: '/:path*',
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
