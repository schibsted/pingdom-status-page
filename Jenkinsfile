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
        sshagent(['vgstatus-private-key']) {
          sh "ssh -o StrictHostKeyChecking=no ${USERNAME}@${HOST} \"cd /home/vgstatus/vgstatus && git pull\""
          sh "ssh -o StrictHostKeyChecking=no ${USERNAME}@${HOST} \"sudo systemctl restart vgstatus\""
          echo "The private key path is: ${PRIVATE_KEY}"
        }
      }
    }
  }
}
