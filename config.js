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

config.google = {
  clientId    : '310539583086-jsic3q60bub7qrmlm73666d81agkrd21.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET,
  callbackUrl : 'http://mikeb-vm.com:3333/auth/google/callback'
};

config.facebook = {
  clientId       : '642714769179504',
  clientSecret   : process.env.FACEBOOK_SECRET,
  callbackUrl    : 'http://mikeb-vm.com:3333/auth/facebook/callback'
};


module.exports = config;
