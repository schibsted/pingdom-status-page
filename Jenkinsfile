pipeline {
  agent any

  stages {
    stage("Deploy") {
      steps {
        echo 'Deploying the application...'
        echo "Branch is ${BRANCH_NAME}"
        echo 'Hello'

        withCredentials([
          sshUserPrivateKey(credentialsId: 'vgstatus-private-key', keyFileVariable: 'PRIVATE_KEY')
        ]) {
          echo "The private key path is: ${PRIVATE_KEY}"
        }
      }
    }
  }
}
