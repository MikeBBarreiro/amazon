'use strict';

var config = {};

config.twitter = {
  apiKey      : 'a0dfat3zmMLx5lbUpx4GP4tUc',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackUrl : 'http://mikeb-vm.com:3333/auth/twitter/callback'
};

config.github = {
  clientId    : 'b55e2f4487f157c00d57',
  clientSecret: process.env.GITHUB_SECRET,
  callbackUrl : 'http://mikeb-vm.com:3333/auth/github/callback'

};

module.exports = config;
