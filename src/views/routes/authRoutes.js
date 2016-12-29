var express = require('express');

var authRouter = express.Router();


authRouter.route('/')
          .get(function(req,res){
            res.send('Hello from the authors');
          });


authRouter.route('/singleAuthor')
          .get(function(req,res){
            res.send('Hello from single authors');
          });

module.exports = authRouter;