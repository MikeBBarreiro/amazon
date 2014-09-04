'use strict';

var Product = require('../models/products'),
    config  = require('../../config');

exports.add = function(req, res){
  Product.findById(req.body.productId, function(err, product){
    req.session.cart = req.session.cart || [];
    req.session.cart.push(product);
    res.redirect('/cart');
  });
};
//imcludes models code
exports.index = function(req, res){
  var products = {},
      subtotal = 0,
      tax = 0,
      total = 0;

  (req.session.cart || []).forEach(function(p){
    subtotal += p.price;
    var id = p._id.toString();
    products[id] = products[id] || {p:p, c:0};
    products[id].c++;
  });

  tax = subtotal * 0.075;
  total = subtotal + tax;

  req.session.totalCents = Math.round(total * 100);
  req.session.save(function(){
    res.render('cart/index',  {key:config.stripe.publishKey, ids:Object.keys(products), products:products, subtotal:subtotal, tax:tax, total:total});
  });
};

//clear cart button
exports.destroy = function(req, res){
  req.session.cart = [];
  req.session.save(function(){
    res.redirect('/cart');
  });
};

exports.purchase = function(req, res){
  console.log('MICHAEL BLAH BLAH BLAH BLAH');
  console.log(req.body);
  var stripe      = require('stripe')(config.stripe.secretKey),
      stripeToken = req.body.stripeToken;

  stripe.charges.create({
    amount: req.session.totalCents,
    currency: 'usd',
    card: stripeToken,
    description: req.user.email || 'anonymous'
  },function(err, charge){
    req.session.cart = [];
    req.session.save(function(){
      req.flash('success', 'Congrats!, you just purchased some Items!');
      res.redirect('/show');
    });
  });
};
