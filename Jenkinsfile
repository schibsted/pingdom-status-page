pipeline {
  agent any

  environment {
    USERNAME = 'vgstatus'
    HOST = '35.228.143.8'
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
        echo "Branch is ${BRANCH_NAME}"
        echo 'Hello'

        withCredentials([
          sshUserPrivateKey(credentialsId: 'vgstatus-private-key', keyFileVariable: 'PRIVATE_KEY')
        ]) {
          sshagent(['vgstatus-private-key']) {
            sh "ssh -o StrictHostKeyChecking=no ${USERNAME}@${HOST} \"cd /home/vgstatus/vgstatus && git pull\""
            sh "ssh -o StrictHostKeyChecking=no ${USERNAME}@${HOST} \"sudo systemctl restart vgstatus\""
            echo "The private key path is: ${PRIVATE_KEY}"
          }
        }
      }
    }
  }
}
