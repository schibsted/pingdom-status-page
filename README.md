# VG Status

The code behind vgstatus.no.

VG Status has two parts: The NextJS app that everyone sees, and a script that gets
the latest data from Pingdom.

## Getting started

You need to set the environment variables:

* `PINGDOM_API_KEY`: A Pingdom API key, obviously
* `PINGDOM_FEATURED_CHECKS`: A comma-separated list of Pingdom check names

To run the server, `$ yarn dev` for development or `$ yarn start` for production. Then open
[http://localhost:3000](http://localhost:3000) with your browser to see it.

To run the script, `$ yarn run update`.

## Deploy

```
$ docker build -t gcr.io/vg-status-page/vgstatus .
$ docker push gcr.io/vg-status-page-vgstatus
$ kubectl rollout restart deployment/vgstatus
```
