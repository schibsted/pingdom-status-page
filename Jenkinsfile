pipeline {
  agent any

  environment {
    SERVER_CREDENTIALS = credentials('vgstatus-private-key')
  }

  stages {
    stage("Deploy") {
      steps {
        echo 'Deploying the application...'
        echo "Branch is ${BRANCH_NAME}"
        echo 'Hello'

        withCredentials([
          sshUserPrivateKey(credentials: 'vgstatus-private-key', keyFileVariable: PRIVATE_KEY)
        ]) {
          echo "The private key path is: ${PRIVATE_KEY}"
        }
      }
    }
  }
}
