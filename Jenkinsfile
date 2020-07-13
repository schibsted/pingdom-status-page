pipeline {
  agent any

  stages {
    stage("Deploy") {
      when {
        expression {
          BRANCH_NAME == 'master'
        }
      }
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
