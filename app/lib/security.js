'use strict';


exports.locals = function(req, res, next){
  res.locals.user = req.user;
  res.locals.flash = {};
//Alert in flash.jade
  var keys = Object.keys(req.session.flash || {});
  keys.forEach(function(key){
    res.locals.flash[key] = req.flash(key);
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
//flash message
    req.flash('error','Warning: This Page Is Protected, Please LOGIN!');
    res.redirect('/login');
  }
};

