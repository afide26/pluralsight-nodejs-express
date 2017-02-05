var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
                {
                title:'Tao of Jeet Kune Do',
                genre:'Martial Arts',
                author: 'Bruce Lee',
                read: false
                },
                {
                title:'The Power of Now',
                genre:'New Age',
                author: 'Eckhart Tolle',
                read: false
                },
                {
                title:'Angels and Demons',
                genre:'Supernatural',
                author: 'Dan Brown',
                read: false
                },
                {
                title:'Tuesdays with Morrie',
                genre:'Inspirational',
                author: 'Mitch Albom',
                read: false
                },
              ];
var router = function(nav){
  adminRouter.route('/addBooks')
    .get(function(req, res){
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function(err, db){
        if(err){
          return console.log('Cannot connect to database');
        }
        var collection = db.collection('books');
        collection.insertMany(books, function(err, results){
          res.send(results);
          db.close();
        });
      });
    });
  return adminRouter;
};

module.exports = router;
