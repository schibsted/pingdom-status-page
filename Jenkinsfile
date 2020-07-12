#!/usr/bin/env groovy
@Library('flow@master')

def team = 'vg'
def project = 'status'
def name = 'status'
def email = 'mpt-vg@schibsted.com'

def stagedRelease = createRelease(
    team: team,
    project: project,
    name: name,
    email: email,
    logging: 'splunk',
    clusters: ['vg-k8s'],
    ports: [[
        name       : 'http',
        port       : 3000,
        protocol   : 'tcp',
        healthcheck: [
            enabled : true,
            protocol: 'http',
            path    : '/api/_health'
        ],
        expose: [
            enabled: true
        ]
    ]],
/*    staticSync: [
        containerSrc: '/usr/src/app',
        destination: '/services/nginx/vhost/static.vg.no/direkte-widget/',
        files: [
            [
                path: 'app/dist/static/*',
                excludes: ['*.json']
            ]
        ]
    ],*/
)

buildRelease(
    release: stagedRelease
)

if (env.BRANCH_NAME == 'master') {
    deployRelease(
        release: stagedRelease,
        environment: 'staging',
        envVars: [
          NODE_ENV: 'staging',
          PORT: '3000',
          TZ: 'Europe/Oslo'
        ],
        manualJudgement: false,
        instances: 1,
        resources: [
            cpus: 0.1,
            memory: 256
        ],
    )

    deployRelease(
        release: stagedRelease,
        environment: 'production',
        envVars: [
          NODE_ENV: 'production',
          PORT: '3000',
          TZ: 'Europe/Oslo'
        ],
        manualJudgement: true,
        instances: 2,
        resources: [
            cpus: 0.1,
            memory: 256
        ],
        purge: [
            varnish: [
                xkeys: ['vg-status']
            ]
        ]
    )
}
