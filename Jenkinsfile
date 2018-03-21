pipeline {
  agent {
    docker {
      image 'agavelab/jenkins-slave'
      args '-T --privileged -u root:root  --entrypoint=/jenkins-slave-startup.sh'
    }
    
  }
  stages {
    stage('test') {
      environment {
        GITHUB_TOKEN = credentials('GITHUB_TOKEN')
      }
      steps {
        sh 'make test'
        script {
          env.GITHUB_TOKEN = GITHUB_TOKEN
        }
        
      }
    }
  }
}