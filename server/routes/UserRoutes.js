const Authentication = require('../auth/auth');
const passportService = require('../auth/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const User = require('../models/user');

module.exports = function (app) {

  app.get('/user',requireAuth, function (req, res) {
    User.findOne({uname:req.query.uname},(err,user)=>{
         if (err) { return next(err); }
         res.json(user);
       });
  });

  app.get('/users',requireAuth, function (req, res) {
    User.find({},(err,users)=>{
         if (err) { return next(err); }
         res.json(users);
       });
  });

  app.put('/user',requireAuth, function (req, res) {
    User.findOne({uname:req.body.uname},(err,user)=>{
      if (err) { return next(err); }
      user.fname=req.body.fname;
      user.lname=req.body.lname;
      user.save(function (err,newuser) {
        if (err) { return next(err); }
        res.json(newuser);
      });

    })
  });

}
