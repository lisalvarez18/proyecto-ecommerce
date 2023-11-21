pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
        stage('Deliver') { 
            steps {
                sh 'node app.js'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'kill -INT 888'
            }
        }
    }
}