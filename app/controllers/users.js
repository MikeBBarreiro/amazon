'use strict';

var User = require('../models/user');

exports.new = function(req, res){
  res.render('users/new');
};

exports.login = function(req, res){
  res.render('users/login');
};

exports.logout = function(req, res){
//passport logs the user out using the .logout(); function
  req.logout();
  req.flash('notice', 'You have successfuly logged out of the system.');
  res.redirect('/');
};

exports.create = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      res.redirect('/');
    }else{
      res.redirect('/register');
    }
  });
};

exports.show = function(req, res){
  res.render('users/show');
};

exports.edit = function(req, res){
  res.render('users/edit');
};

exports.update = function(req, res){
  res.user.update(req.body, function(){
    req.flash('notice','You Have updated your profile!');
    res.redirect('/show');
  });
};

/*exports.localAuthenticate = function(req, res){
  User.authenticate(req.body, function(user){
    if(user){
      req.session.regenerate(function(){
        req.session.userId = user._id;
        req.session.save(function(){
          res.redirect('/');
        });
      });
    }else{
      res.redirect('/login');
    }
  });
};*/

