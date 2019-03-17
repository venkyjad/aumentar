module.exports = {
  apps: [{
    name: 'aumentar',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-232-46-166.ap-south-1.compute.amazonaws.com',
      key: '~/Documents/node_aws_server/node_server.pem',
      ref: 'origin/master',
      repo: 'git@github.com:venkyjad/aumentar.git',
      path: '/home/ubuntu/aumentar',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
