# VG Status

The code behind vgstatus.no.

VG Status has two parts: The NextJS app that everyone sees, and a script that gets
the latest data from Pingdom.

## Getting started

You need to set the environment variables:

* `PINGDOM_API_KEY`: A Pingdom API key, obviously

To run the server, `$ yarn dev` for development or `$ yarn start` for production. Then open
[http://localhost:3000](http://localhost:3000) with your browser to see it.

To run the script, `$ yarn run update`.

## Configuration

Configure your checks in `config.json`:

```javascript
{
  "checks": [
    {
      "id": 4574685, // The check ID on Pingdom
      "name": "VG Front page" // Whatever you want it to be listed as on your status page
    },
    {
      "id": 6420183,
      "name": "VG Articles"
    },
    ...
  ]
}
```

## Deploy

Jenkins automatically deploys `master` to a virtual machine on Google Cloud.
