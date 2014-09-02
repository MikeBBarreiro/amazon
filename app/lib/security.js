'use strict';


exports.locals = function(req, res, next){
  res.locals.user = req.user;
//Alert in flash.jade
  var keys = Object.keys(req.session.flash || {});
  res.locals.flash = {};
  keys.forEach(function(key){
    res.locals.flash[key] = [];
    req.session.flash[key].forEach(function(msg){
      res.locals.flash[key].push(req.flash(key));
    });
  });
  next();
};


//User.findById(req.session.userId, function(err, user){
//res.locals.user = user;
//next();
// });
//};

exports.bounce = function(req, res, next){
  if(res.locals.user){
    next();
  }else{
    res.redirect('/login');
  }
};

