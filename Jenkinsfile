node{
	stage('Checkout SCM'){
		git branch: 'master', url: 'git@github.com:tutos69/AngualarSprint.git'
	}	
	stage('Install'){
		sh 'npm install'
	}	
	
	stage('Build'){
		sh 'npm run build:ssr'
	} 
	stage('Test'){
		sh 'pm2 restart all'
	} 
}
