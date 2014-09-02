'use strict';

var LocalStrategy = require('passport-local').Strategy,
    User          = require('../../models/user'),
    local         = new LocalStrategy({usernameField:'email', passwordfield:'password'}, User.localAuthenticate);

module.exports = local;
