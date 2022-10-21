module.exports = {
  platform: 'github',
  endpoint: 'https://api.github.com',
  baseBranches: ['main'],
  labels: ['renovate'],
  token: process.env.RENOVATE_TOKEN
};
