pipeline {
  agent any

  environment {
    SERVER_CREDENTIALS = credentials('vgstatus-private-key')
  }

  stages {
    stage("Deploy") {
      when {
        expression {
          BRANCH_NAME == 'master'
        }
      }
      steps {
        echo 'Deploying the application...'

        withCredentials([
          sshUserPrivateKey(credentials: 'vgstatus-private-key', keyFileVariable: PRIVATE_KEY)
        ]) {
          echo "The private key path is: ${PRIVATE_KEY}"
        }
      }
    }
  }
}
