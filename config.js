'use strict';

var config = {};

config.twitter = {
  apiKey      : 'a0dfat3zmMLx5lbUpx4GP4tUc',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackUrl : 'http://mikeb-vm.com:3333/auth/twitter/callback'
};


module.exports = config;
